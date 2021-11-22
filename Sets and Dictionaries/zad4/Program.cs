using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad4
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            Dictionary<int, int> rez = new Dictionary<int, int>();
            for (int i = 0; i < num; i++)
            {
                int curr = int.Parse(Console.ReadLine());
                if (rez.ContainsKey(curr)) rez[curr]++;
                else
                {
                    rez.Add(curr, 1);
                }
            }
            foreach (var item in rez.Keys)
            {
                if (rez[item] % 2 == 0)
                {
                    Console.WriteLine(item);
                }
            }
            Console.ReadKey();
        }
    }
}
