using System;

namespace zad3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            List<int> Evens = new List<int>();
            List<int> Odds = new List<int>();

            List<int> nums = Console.ReadLine().Split().Select(int.Parse).ToList();

            for (int i = 0; i < num - 1; i++)
            {
                if (i % 2 != 0)
                {
                    if (nums[i] > nums[i + 1])
                    {
                        int c = nums[i];
                        nums[i] = nums[i + 1];
                        nums[i + 1] = c;
                    }
                }
                else
                {
                    if (nums[i] < nums[i + 1])
                    {
                        int c = nums[i];
                        nums[i] = nums[i + 1];
                        nums[i + 1] = c;
                    }
                }
            }

            Console.WriteLine(String.Join(' ', nums));
        }
        static void SwapNum(ref int x, ref int y)
        {
            int tempswap = x;
            x = y;
            y = tempswap;
        }
    }
}