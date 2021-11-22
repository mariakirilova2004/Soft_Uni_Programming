using System;
using System.Linq;

namespace Vehicles
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Car car = new Car(double.Parse(input[1]), double.Parse(input[2]), double.Parse(input[3]));
            input = Console.ReadLine().Split().ToArray();
            Truck truck = new Truck(double.Parse(input[1]), double.Parse(input[2]), double.Parse(input[3]));
            input = Console.ReadLine().Split().ToArray();
            Bus bus = new Bus(double.Parse(input[1]), double.Parse(input[2]), double.Parse(input[3]));
            int commands = int.Parse(Console.ReadLine());
            for (int i = 0; i < commands; i++)
            {
                input = Console.ReadLine().Split().ToArray();
                double num = double.Parse(input[2]);
                if (input[0] == "Drive")
                {
                    if (input[1] == "Car")
                    {
                        car.Drive(num);
                    }
                    else if (input[1] == "Truck")
                    {
                        truck.Drive(num);
                    }
                    else
                    {
                        bus.Drive(num);
                    }
                }
                else if (input[0] == "Refuel")
                {
                    try
                    {
                        if (input[1] == "Car")
                        {
                            car.Refuel(num);
                        }
                        else if (input[1] == "Truck")
                        {
                            truck.Refuel(num);
                        }
                        else
                        {
                            bus.Refuel(num);
                        }
                    }
                    catch(ArgumentException e)
                    {
                        Console.WriteLine(e.Message);
                    }
                }
                else
                {
                    bus.DriveEmpty(num);
                }
            }
            Console.WriteLine($"Car: {car.fuelQ:0.00}");
            Console.WriteLine($"Truck: {truck.fuelQ:0.00}");
            Console.WriteLine($"Bus: {bus.fuelQ:0.00}");
        }
    }
}
