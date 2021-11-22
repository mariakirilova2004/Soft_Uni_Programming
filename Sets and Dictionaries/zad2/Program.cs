using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            HashSet<int> rez = new HashSet<int>();
            HashSet<int> set1 = new HashSet<int>();
            HashSet<int> set2 = new HashSet<int>();
            for (int i = 0; i < nums[0]; i++)
            {
                set1.Add(int.Parse(Console.ReadLine()));
            }
            for (int i = 0; i < nums[1]; i++)
            {
                set2.Add(int.Parse(Console.ReadLine()));
            }
            foreach (var num in set1)
            {
                if (set2.Contains(num)) rez.Add(num);
            }
            Console.WriteLine(string.Join(" ", rez));
            Console.ReadKey();
        }
    }
}
