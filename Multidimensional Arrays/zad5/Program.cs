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
            int[] square = Console.ReadLine().Split().Select(int.Parse).ToArray();
            char[][] matrix = new char[square[0]][];
            string snake = Console.ReadLine();
            int br = 0;
            int contr = 2;
            for (int i = 0; i < square[0]; i++)
            {
                if (contr == 1)
                {
                    matrix[i] = new char[square[1]];
                    for (int j = square[1] - 1; j >= 0; j--)
                    {
                        matrix[i][j] = snake[br];
                        br++;
                        if (br >= snake.Length) br = 0;
                    }
                }
                if (contr == 2)
                {
                    matrix[i] = new char[square[1]];
                    for (int j = 0; j < square[1]; j++)
                    {
                        matrix[i][j] = snake[br];
                        br++;
                        if (br >= snake.Length) br = 0;
                    }
                }
                if (contr == 1) contr = 2;
                else contr = 1;
            }
            for (int i = 0; i < square[0]; i++)
            {
                for (int j = 0; j < square[1]; j++)
                {
                    Console.Write(matrix[i][j]);
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
