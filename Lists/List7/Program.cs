using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List7
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine().Split('|').ToList();
            for (int i = 0; i < input.Count; i++)
            {
                input[i] = input[i].Trim();
            }
            input.Reverse();
            foreach (var item in input)
            {
                List<string> inp = item.Split().ToList();
                inp.RemoveAll(p => string.IsNullOrEmpty(p));
                foreach (var itemi in inp)
                {
                    Console.Write(itemi + " ");
                }
            }
            Console.ReadKey();
        }
    }
}
