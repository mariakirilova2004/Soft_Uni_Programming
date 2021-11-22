using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad6
{
    class Program
    {
        static int num = 0;
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            List<int> rez = new List<int>();
            num = int.Parse(Console.ReadLine());
            Func<int, int, bool> IsDivisible = isDivisible;
            foreach (var item in nums)
            {
                if (!IsDivisible(item, num)) rez.Add(item);
            }
            rez.Reverse();
            foreach (var item in rez)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
            Console.ReadKey();
        }
        static bool isDivisible (int x, int y)
        {
            if (x % y == 0) return true;
            else return false;
        }
    }
}
