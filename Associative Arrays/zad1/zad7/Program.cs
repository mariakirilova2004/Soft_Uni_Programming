using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<double>> courses = new Dictionary<string, List<double>>();
            int number = int.Parse(Console.ReadLine());
            for(int i = 0; i < number; i++)
            {
                string input = Console.ReadLine();
                double inputd = double.Parse(Console.ReadLine());
                if (courses.ContainsKey(input)) courses[input].Add(inputd);
                else
                {
                    courses.Add(input, new List<double>());
                    courses[input].Add(inputd);
                }
            }
            var ordered = courses.OrderByDescending(x => x.Value.Average());
            foreach (var item in ordered)
            {
                if(item.Value.Average() >= 4.5)
                {
                    Console.WriteLine($"{item.Key} -> {item.Value.Average():0.00}");
                }
            }
            Console.ReadKey();
        }
    }
}
