using System;

namespace zad1
{
    public class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            Console.WriteLine(gcdEuclidSubtraction(a, b) + lcmNaive(a, b));
        }
        static int gcdEuclidSubtraction(int a, int b)
        {
            while (a != b)
            {
                if (a < b)
                {
                    SwapNum(ref a, ref b);
                }
                a -= b;
            }
            return a;
        }

        static int lcmNaive(int a, int b)
        {
            for (int i = Max(a, b); i <= (int) a* b; i++) {
                if (i % a == 0 && i % b == 0)
                {
                    return i;
                }
            }
            return 1;
        }

        static int Max(int a, int b)
        {
            if (a > b) return a;
            else return b;
        }

        static void SwapNum(ref int x, ref int y)
        {
            int tempswap = x;
            x = y;
            y = tempswap;
        }
    }
}