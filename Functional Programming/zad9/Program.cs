using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad9
{
    class Program
    {
        static void Main(string[] args)
        {
            int nums = int.Parse(Console.ReadLine());
            int[] numsD = Console.ReadLine().Split().Select(int.Parse).ToArray();
            List<int> rez = new List<int>();
            Func<int, int[], bool> IsDivisible = isDivisible;
            for (int i = 1; i <= nums; i++)
            {
                if (IsDivisible(i, numsD)) rez.Add(i);
            }
            foreach (var item in rez)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
            Console.ReadKey();
        }
        static bool isDivisible(int x, int[] y)
        {
            int br = 0;
            foreach (var item in y)
            {
                if(x % item == 0)
                {
                    br++;
                }
            }
            if (br == 0) return false;
            else if (br == y.Length) return true;
            else return false;
        }
    }
}
