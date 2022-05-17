using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ProductShop.Data;
using ProductShop.Dtos.Input;
using ProductShop.Dtos.Outputs;
using ProductShop.Models;

namespace ProductShop
{
    public class StartUp
    {
        private static IMapper mapper;
        public static void Main(string[] args)
        {
            var context = new ProductShopContext();
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            string usersJsonAsString = File.ReadAllText("../../../Datasets/users.json");
            Console.WriteLine(ImportUser(context, usersJsonAsString));

            string productsJsonAsString = File.ReadAllText("../../../Datasets/products.json");
            Console.WriteLine(ImportProducts(context, productsJsonAsString));

            string categoriesJsonAsString = File.ReadAllText("../../../Datasets/categories.json");
            Console.WriteLine(ImportCategories(context, categoriesJsonAsString));

            string categoriesproducts = File.ReadAllText("../../../Datasets/categories-products.json");
            Console.WriteLine(ImportCategoriesProducts(context, categoriesproducts));

            Console.WriteLine(GetProductsInRange(context));
            Console.WriteLine(GetAllSoldProducts(context));
            Console.WriteLine(GetCategoriesByProductsCount(context));
        }

        public static string ImportUser(ProductShopContext context, string inputJson)
        {
            IEnumerable<UserInputDTO> users = JsonConvert.DeserializeObject<IEnumerable<UserInputDTO>>(inputJson);

            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ProductShopProfile>();
            });
            mapper = new Mapper(mapperConfiguration);

            IEnumerable<User> mappedUsers = mapper.Map<IEnumerable<User>>(users);

            //IEnumerable<User> mappedUsers = users
            //    .Select(x => x.MapToUser())
            //    .ToList();

            context.Users.AddRange(mappedUsers);

            context.SaveChanges();

            return $"Successfully imported {mappedUsers.Count()}";
        }

        public static string ImportProducts(ProductShopContext context, string inputJson)
        {
            IEnumerable<ProductInputDTO> products = JsonConvert.DeserializeObject<IEnumerable<ProductInputDTO>>(inputJson);

            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ProductShopProfile>();
            });

            mapper = new Mapper(mapperConfiguration);

            var mappedProducts = mapper.Map<IEnumerable<Product>>(products);

            context.Products.AddRange(mappedProducts);
            context.SaveChanges();

            return $"Successfully imported {mappedProducts.Count()}";
        }

        public static string ImportCategories(ProductShopContext context, string inputJson)
        {
            IEnumerable<CategoriesInputDTO> categories = JsonConvert.DeserializeObject<IEnumerable<CategoriesInputDTO>>(inputJson)
                .Where(x => !string.IsNullOrEmpty(x.Name));

            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ProductShopProfile>();
            });

            mapper = new Mapper(mapperConfiguration);

            var mappedCategories = mapper.Map<IEnumerable<Category>>(categories);

            context.Categories.AddRange(mappedCategories);
            context.SaveChanges();

            return $"Successfully imported {mappedCategories.Count()}";
        }

        public static string ImportCategoriesProducts(ProductShopContext context, string inputJson)
        {
            IEnumerable<CategoriesProductsInputDTO> categoriesProducts = JsonConvert.DeserializeObject<IEnumerable<CategoriesProductsInputDTO>>(inputJson);

            var mapperConfiguration = new MapperConfiguration(cfg => {
                cfg.AddProfile<ProductShopProfile>();
            });

            mapper = new Mapper(mapperConfiguration);

            var mappedCategoriesProducts = mapper.Map<IEnumerable<CategoryProduct>>(categoriesProducts);

            context.CategoryProducts.AddRange(mappedCategoriesProducts);
            context.SaveChanges();

            return $"Successfully imported {mappedCategoriesProducts.Count()}";
        }

        public static string GetProductsInRange(ProductShopContext context)
        {
            var result = context.Products
                .Where(x => x.Price >= 500 && x.Price <= 1000)
                .OrderBy(x => x.Price)
                .Select(x => new ProductOutputDTO
                { 
                    Name = $"{x.Name}", 
                    Price = x.Price, 
                    Seller = $"{x.Seller.FirstName} {x.Seller.LastName}"
                })
                .ToList();

            var mapperConfiguration = new MapperConfiguration(cfg => {
                cfg.AddProfile<ProductShopProfile>();
            });

            mapper = new Mapper(mapperConfiguration);

            var mappedResult = mapper.Map<IEnumerable<ProductOutputDTO>>(result);

            DefaultContractResolver contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };

            var jsonSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ContractResolver = contractResolver
            };

            string productsAsJson = JsonConvert.SerializeObject(result, jsonSettings);
            return productsAsJson;
        }

        public static string GetAllSoldProducts(ProductShopContext context)
        {
            var result = context
                .Users
                .Include(p => p.ProductsSold)
                .Where(x => x.ProductsSold.Any(z => z.BuyerId != null))
                .OrderBy(x => x.LastName)
                .ThenBy(x => x.FirstName)
                .Select(z => new UserSoldProductsOutputDTO
                {
                    FirstName = z.FirstName,
                    LastName = z.LastName,
                    ProductsSold = z.ProductsSold.Select(x => new SoldProductOutputDTO
                    {
                        Name = x.Name,
                        Price = x.Price,
                        buyerFirstName = x.Buyer.FirstName,
                        buyerLastName = x.Buyer.LastName
                    })
                    .ToList()
                })
                .ToList();

            DefaultContractResolver contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };

            var jsonSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ContractResolver = contractResolver
            };

            string productsAsJson = JsonConvert.SerializeObject(result, jsonSettings);
            return productsAsJson;
        }

        public static string GetCategoriesByProductsCount(ProductShopContext context)
        {
            var result = context.Categories
                .Include(x => x.CategoryProducts)
                .OrderByDescending(x => x.CategoryProducts.Count())
                .Select(x => new 
                {
                    Name = x.Name,
                    NumberOfProducts = x.CategoryProducts.Count(),
                    AvgPriceOfAllProducts = Math.Round(((x.CategoryProducts.Sum(z => z.Product.Price)) / x.CategoryProducts.Count()), 2),
                    TotalPrice = Math.Round(x.CategoryProducts.Sum(z => z.Product.Price), 2)
                })
                .ToList();

            DefaultContractResolver contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };

            var jsonSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ContractResolver = contractResolver
            };

            string resultAsJson = JsonConvert.SerializeObject(result, jsonSettings);
            return resultAsJson;
        }
    }

    public static class UserMappings
    {
        //public static User MapToUser(this UserInputDTO userDto)
        //{
        //    return new User
        //    {
        //        Age = userDto.Age,
        //        FirstName = userDto.FirstName,
        //        LastName = userDto.LastName
        //    };
        //}

        //public static UserInputDTO MapToUser(this User userDto)
        //{
        //    return new UserInputDTO
        //    {
        //        Age = userDto.Age,
        //        FirstName = userDto.FirstName,
        //        LastName = userDto.LastName
        //    };
        //}
    }

}