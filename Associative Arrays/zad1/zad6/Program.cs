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
            Dictionary<string, List<string>> courses = new Dictionary<string, List<string>>();
            while(true)
            {
                string[] input = Console.ReadLine().Split(':').ToArray();
                for (int i = 0; i < input.Length; i++)
                {
                    input[i] = input[i].TrimStart().TrimEnd();
                }
                if (input[0] == "end") break;
                if (courses.ContainsKey(input[0])) courses[input[0]].Add(input[1]);
                else
                {
                    courses.Add(input[0].TrimEnd(), new List<string>());
                    courses[input[0]].Add(input[1]);
                }
            }
            var ordered = courses.OrderByDescending(x => x.Value.Count);
            foreach (var item in ordered)
            {
                item.Value.Sort();
                Console.WriteLine($"{item.Key}: {item.Value.Count}");
                foreach (var p in item.Value)
                {
                    Console.WriteLine($"-- {p}");
                }
            }
            Console.ReadKey();
        }
    }
}
