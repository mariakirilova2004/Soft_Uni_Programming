using AutoMapper;
using ProductShop.Dtos.Input;
using ProductShop.Dtos.Outputs;
using ProductShop.Models;

namespace ProductShop
{
    public class ProductShopProfile : Profile
    {
        public ProductShopProfile()
        {
            CreateMap<UserInputDTO, User>();

            CreateMap<ProductInputDTO, Product>();

            CreateMap<CategoriesInputDTO, Category>();

            CreateMap<CategoriesProductsInputDTO, CategoryProduct>();

            CreateMap<Product, ProductOutputDTO>()
                .ForMember(dest => dest.Seller, opt => opt.MapFrom(src => $"{src.Seller.FirstName} {src.Seller.LastName}"));
        }
    }
}
