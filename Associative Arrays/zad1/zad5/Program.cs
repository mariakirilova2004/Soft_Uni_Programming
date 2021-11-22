using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad5
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            Dictionary<string, string> parking = new Dictionary<string, string>();
            for (int i = 0; i < number; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                if(input[0] == "register")
                {
                    if (parking.ContainsKey(input[1])) Console.WriteLine($"ERROR: already registered with plate number {parking[input[1]]}");
                    else
                    {
                        parking.Add(input[1], input[2]);
                        Console.WriteLine($"{input[1]} registered {input[2]} successfully");
                    }
                }
                else
                {
                    if (!parking.ContainsKey(input[1])) Console.WriteLine($"ERROR: user {input[1]} not found");
                    else
                    {
                        parking.Remove(input[1]);
                        Console.WriteLine($"{input[1]} unregistered successfully");
                    }
                }
            }
            foreach (var item in parking)
            {
                Console.WriteLine($"{item.Key} => {item.Value}");
                
            }
            Console.ReadKey();
        }
    }
}
