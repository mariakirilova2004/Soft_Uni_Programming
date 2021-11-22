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
            int oborot = int.Parse(Console.ReadLine());
            int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int max = input[0];
            Queue<int> data = new Queue<int>(input);
            for (int i = 1; i <= input.Length; i++)
            {

                if(oborot - data.Peek() < 0)
                {
                    Console.WriteLine(input.Max());
                    Console.WriteLine("Orders left: " + string.Join(" ", data));
                    break;
                }
                else
                {
                    if(i == input.Length)
                    {
                        if (data.Peek() > max) max = data.Peek();
                        Console.WriteLine(input.Max());
                        Console.WriteLine("Orders complete");
                        break;
                    }
                    if (data.Peek() > max) max = data.Peek();
                    oborot -= data.Peek();
                    data.Dequeue();
                }
            }
            Console.ReadKey();
        }
    }
}
