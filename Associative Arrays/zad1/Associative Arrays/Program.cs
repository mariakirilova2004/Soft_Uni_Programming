using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Associative_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine().Replace(" ", "");
            Dictionary<char, int> list = new Dictionary<char, int>();
            for (int i = 0; i < input.Length; i++)
            {
                if(list.ContainsKey(input[i]))
                {
                    list[input[i]]++;
                }
                else
                {
                    list.Add(input[i], 1);
                }
            }
            foreach (var item in list)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }
            Console.ReadKey();
        }
    }
}
