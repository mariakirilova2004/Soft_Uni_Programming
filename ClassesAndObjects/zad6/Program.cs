using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad6
{
    class Program
    {
        static void Main(string[] args)
        {
            string input;
            List<CarOrTruck> list = new List<CarOrTruck>();
            while (true)
            {
                input = Console.ReadLine();
                if (input == "End") break;
                string[] inputArray = input.Split().ToArray();
                CarOrTruck element = new CarOrTruck(inputArray[0], inputArray[1], inputArray[2], int.Parse(inputArray[3]));
                list.Add(element);
            }
            while (input != "Close the Catalogue")
            {
                input = Console.ReadLine();
                foreach (var item in list)
                {
                    if(item.Model == input)
                    {
                        if(item.Type == "car")
                        Console.WriteLine($"Type: Car");
                        else
                        Console.WriteLine($"Type: Truck");
                        Console.WriteLine($"Model: {item.Model}");
                        Console.WriteLine($"Color: {item.Color}");
                        Console.WriteLine($"Horsepower: {item.Horsepower}");
                    }
                }
            }

            double avgcar = 0;
            double avgtruck = 0;
            int brcar = 0;
            int brtruck = 0;

            foreach (var car in list)
            {
                if(car.Type == "car")
                {
                    avgcar += car.Horsepower;
                    brcar++;
                }
            }
            avgcar /= (double)brcar;

            foreach (var truck in list)
            {
                if (truck.Type == "truck")
                {
                    avgtruck += truck.Horsepower;
                    brtruck++;
                }
            }
            avgtruck /= (double)brtruck;

            Console.WriteLine($"Cars have average horsepower of:{avgcar: 0.00}.");
            Console.WriteLine($"Trucks have average horsepower of:{avgtruck: 0.00}.");
            Console.ReadKey();
        }
    }
}
