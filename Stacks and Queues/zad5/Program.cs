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
            int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Stack<int> clothes = new Stack<int>(input);
            int rack = int.Parse(Console.ReadLine());
            int current = rack;
            int br = 1;
            for (int i = 0; i < input.Length; i++)
            {
                if(current - clothes.Peek() >= 0)
                {
                    current -= clothes.Peek();
                }
                else
                {
                    br++;
                    current = rack;
                    current -= clothes.Peek();
                }
                clothes.Pop();
            }
            Console.WriteLine(br);
            Console.ReadKey();
        }
    }
}
