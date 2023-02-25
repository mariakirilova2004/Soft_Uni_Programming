using System;

namespace zad4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int sr = 0;
            int sc = 0;
            int r = int.Parse(Console.ReadLine());
            int c = int.Parse(Console.ReadLine());
            string R = "";

            int[][] matrix = new int[r][];

            for (int i = 0; i < r; i++)
            {
                int[] row = Console.ReadLine().Split().Select(int.Parse).ToArray();
                matrix[i] = row;
            }

            while (sr != r && sc != c )
            {
                for (int i = sc; i < c; i++)
                {
                    R += " " + matrix[sr][i];
                }

                sr += 1;

                if (sr == r || sc == c) break;


                for (int i = sr; i < r; i++)
                {
                    R += " " + matrix[i][c - 1];
                }

                c -= 1;

                if (sr == r || sc == c) break;

                for (int i = c - 1; i > sc - 1; i--)
                {
                    R += " " + matrix[r - 1][i];
                }

                r -= 1;

                if (sr == r || sc == c) break;

                for (int i = r - 1; i >= sr; i--)
                {
                    R += " " + matrix[i][sc];
                }   
                
                sc += 1;
            }

            Console.WriteLine(String.Join(' ', R.TrimStart()));
        }
    }
}

