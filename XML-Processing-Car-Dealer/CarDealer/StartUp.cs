using CarDealer.Data;
using CarDealer.DTO.Export;
using CarDealer.DTO.Import;
using CarDealer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace CarDealer
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            CarDealerContext context = new CarDealerContext();
            string inputXML = File.ReadAllText("../../../Datasets/suppliers.xml");
            string inputXML2 = File.ReadAllText("../../../Datasets/parts.xml");
            string inputXML3 = File.ReadAllText("../../../Datasets/cars.xml");
            //ResetDB(context);
            string result = ImportSuppliers(context, inputXML);
            string result2 = ImportParts(context, inputXML2);
            string result3 = ImportCars(context, inputXML3);
            //Console.WriteLine(result);
            //Console.WriteLine(result2);
            //Console.WriteLine(result3);
            //Console.WriteLine(GetCarsWithDistance(context));
            Console.WriteLine(GetSalesWithAppliedDiscount(context));
        }

        public static string ImportSuppliers(CarDealerContext context, string inputXml)
        {
            XmlRootAttribute root = new XmlRootAttribute("Suppliers");
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(SupplierImportDTO[]), root);

            using StringReader stringReader = new StringReader(inputXml);

            SupplierImportDTO[] supplierImportDTOs = (SupplierImportDTO[])xmlSerializer.Deserialize(stringReader);
            ICollection<Supplier> suppliers = new HashSet<Supplier>();

            foreach (SupplierImportDTO dto in supplierImportDTOs)
            {
                suppliers.Add(new Supplier {Name = dto.Name, IsImporter = dto.isImporter });
            }

            context.Suppliers.AddRange(suppliers);
            context.SaveChanges();
            return $"Successfully imported {suppliers.Count}";
        }

        public static string ImportParts(CarDealerContext context, string inputXml)
        {
            XmlRootAttribute root = new XmlRootAttribute("Parts");
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(PartsImportDTO[]), root);

            using StringReader stringReader = new StringReader(inputXml);

            PartsImportDTO[] PartsImportDTOs = (PartsImportDTO[])xmlSerializer.Deserialize(stringReader);
            ICollection<Part> parts = new HashSet<Part>();

            foreach (PartsImportDTO dto in PartsImportDTOs)
            {
                Supplier supplier = context.Suppliers.Find(dto.SupplierId);
                if (supplier == null)
                {
                    continue;
                }
                parts.Add(new Part { Name = dto.Name, Price = dto.Price, Quantity = dto.Quantity, SupplierId = dto.SupplierId });
            }

            context.Parts.AddRange(parts);
            context.SaveChanges();
            return $"Successfully imported {parts.Count}";
        }

        public static string ImportCars(CarDealerContext context, string inputXml)
        {
            XmlRootAttribute root = new XmlRootAttribute("Cars");
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(CarImportDTO[]), root);

            using StringReader stringReader = new StringReader(inputXml);

            CarImportDTO[] CarImportDTOs = (CarImportDTO[])xmlSerializer.Deserialize(stringReader);
            ICollection<Car> cars = new HashSet<Car>();
            
            foreach (CarImportDTO dto in CarImportDTOs)
            {
                Car c = new Car { Make = dto.Make, Model = dto.Model, TravelledDistance = dto.TravelledDistance };
                ICollection<PartCar> partCars = new HashSet<PartCar>();

                foreach (var partId in dto.PartCars.Select(p => p.Id).Distinct())
                {
                    Part p = context
                        .Parts
                        .Find(partId);

                    if(p == null)
                    {
                        continue;
                    }

                    PartCar pc = new PartCar { Car = c, Part = p };
                    partCars.Add(pc);
                    cars.Add(c);
                }
            }

            context.Cars.AddRange(cars);
            context.SaveChanges();
            return $"Successfully imported {cars.Count}";
        }

        public static string GetCarsWithDistance(CarDealerContext context)
        {
            StringBuilder stringBuilder = new StringBuilder();
            XmlRootAttribute root = new XmlRootAttribute("Cars");
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(CarsWithDistanceExportDTO[]), root);

            using StringWriter stringWriter = new StringWriter(stringBuilder);

            CarsWithDistanceExportDTO[] carsWithDistanceExportDTOs = context
                .Cars
                .Where(c => c.TravelledDistance > 2000000)
                .OrderBy(x => x.Make)
                .ThenBy(x => x.Model)
                .Take(10)
                .Select(x => new CarsWithDistanceExportDTO {
                    Make = x.Make,
                    Model = x.Model,
                    TraveledDistance = x.TravelledDistance.ToString()
                })
                .ToArray();

            xmlSerializer.Serialize(stringWriter, carsWithDistanceExportDTOs);

            return stringBuilder.ToString();
        }

        public static string GetSalesWithAppliedDiscount(CarDealerContext context)
        {
            StringBuilder stringBuilder = new StringBuilder();
            XmlRootAttribute root = new XmlRootAttribute("sales");
            XmlSerializer serializer = new XmlSerializer(typeof(GetSalesWithAppliedDiscountExportDTO[]), root);

            using StringWriter stringWriter = new StringWriter(stringBuilder);

            GetSalesWithAppliedDiscountExportDTO[] getSalesWithAppliedDiscountExportDTOs = context
                .Sales
                .Select(x => new GetSalesWithAppliedDiscountExportDTO()
                {
                    Car = new CarExportDTO
                    {
                        Make = x.Car.Make,
                        Model = x.Car.Model,
                        TravelledDistance = x.Car.TravelledDistance.ToString()
                    },
                    Discount = x.Discount.ToString("f2"),
                    CustomerName = x.Customer.Name,
                    Price = x.Car.PartCars.Sum(x => x.Part.Price).ToString("f2"),
                    PriceWithDiscount = (x.Car.PartCars.Sum(x => x.Part.Price) - (x.Car.PartCars.Sum(x => x.Part.Price) * (decimal)x.Discount / 100)).ToString("f2")
                })
                .ToArray();

            serializer.Serialize(stringWriter, getSalesWithAppliedDiscountExportDTOs);
            return stringBuilder.ToString();
        }

        public static void ResetDB(CarDealerContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
            Console.WriteLine("Successfully ");
        }
    }
}