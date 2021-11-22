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
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            List<int> odd = new List<int>();
            List<int> even = new List<int>();
            Predicate<int> IsEven = x => x % 2 == 0;
            foreach (var item in nums)
            {
                if (IsEven(item)) even.Add(item);
                else odd.Add(item);
            }
            even.Sort();
            odd.Sort();
            Console.Write($"{string.Join(" ", even)} {string.Join(" ", odd)}");
            Console.ReadKey();
        }
    }
}
