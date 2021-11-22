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
            SortedDictionary<char, int> rez = new SortedDictionary<char, int>();
            string input = Console.ReadLine();
            for (int i = 0; i < input.Length; i++)
            {
                if (rez.ContainsKey(input[i])) rez[input[i]]++;
                else rez.Add(input[i], 1);
            }
            foreach (var item in rez.Keys)
            {
                Console.WriteLine($"{item}: {rez[item]} time/s");
            }
            Console.ReadKey();
        }
    }
}
