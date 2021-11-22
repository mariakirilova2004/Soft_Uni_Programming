using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            string[] names = Console.ReadLine().Split().ToArray();
            List<string> rez = new List<string>();
            Func<string, int, bool> IsOK = IsOk;
            foreach (var item in names)
            {
                if (IsOK(item, num)) rez.Add(item);
            }
            foreach (var item in rez)
            {
                Console.WriteLine($"{item} ");
            }
            Console.ReadKey();
        }
        static bool IsOk(string name, int num)
        {
            if (name.Length <= num) return true;
            else return false;
        }
    }
}
