using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List3
{
    class Program
    {
        static void Main(string[] args)
        {
            int commands = int.Parse(Console.ReadLine());
            List<string> guests = new List<string>();
            string[] input;
            for (int i = 0; i < commands; i++)
            {
                input = Console.ReadLine().Split().ToArray();
                    if(input[2] == "not")
                    {
                        if (guests.Contains(input[0])) guests.Remove(input[0]);
                        else Console.WriteLine($"{input[0]} is not in the list!");
                    }
                    else
                    {
                        if (guests.Contains(input[0])) Console.WriteLine($"{input[0]} is already in the list!");
                        else guests.Add(input[0]);
                    }
            }
            foreach (var item in guests)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
}
