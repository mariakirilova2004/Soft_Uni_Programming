using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad3
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedSet<string> rez = new SortedSet<string>();
            int num = int.Parse(Console.ReadLine());
            for (int i = 0; i < num; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                foreach (var curr in input)
                {
                    rez.Add(curr);
                }
            }
            Console.WriteLine(string.Join(" ", rez));
            Console.ReadKey();
        }
    }
}
