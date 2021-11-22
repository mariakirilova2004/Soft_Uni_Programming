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
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Func<int, int> add = x => x + 1;
            Func<int, int> multiply = x => x * 2;
            Func<int, int> subtract = x => x - 1;
            Action<int> print = x => Console.Write(x + " ");
            while (true)
            {
                string command = Console.ReadLine();
                if (command == "end") break;
                else if (command == "add")
                {
                    for (int i = 0; i < nums.Length; i++)
                    {
                        nums[i] = add(nums[i]);
                    }
                }
                else if (command == "multiply")
                {
                    for (int i = 0; i < nums.Length; i++)
                    {
                        nums[i] = multiply(nums[i]);
                    }
                }
                else if (command == "subtract")
                {
                    for (int i = 0; i < nums.Length; i++)
                    {
                        nums[i] = subtract(nums[i]);
                    }
                }
                else if (command == "print")
                {
                    for (int i = 0; i < nums.Length; i++)
                    {
                        print(nums[i]);
                    }
                    Console.WriteLine();
                }
            }

            Console.ReadLine();
        }
    }
}
