using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad8
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> courses = new Dictionary<string, List<string>>();
            while (true)
            {
                string[] input = Console.ReadLine().Split('-').ToArray();
                if (input[0] == "End") break;
                input[0] = input[0].TrimEnd();
                input[1] = input[1].Remove(0,1).TrimStart();
                if (courses.ContainsKey(input[0]))
                {
                    if(!courses[input[0]].Contains(input[1])) courses[input[0]].Add(input[1]);
                }
                else 
                {
                    courses.Add(input[0], new List<string>());
                    courses[input[0]].Add(input[1]);
                }
            }
            var ordered = courses.OrderBy(x => x.Key);
            foreach (var item in ordered)
            {
                Console.WriteLine($"{item.Key}");
                foreach (var p in item.Value)
                {
                    Console.WriteLine($"-- {p}");
                }
            }
            Console.ReadKey();
        }
    }
}
