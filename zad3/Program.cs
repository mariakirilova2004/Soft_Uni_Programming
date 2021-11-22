using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad3
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] square = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[][] matrix = new int[square[0]][];
            int[,] matrixout = new int[3,3];
            int max = 0;
            for (int i = 0; i < square[0]; i++)
            {
                int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();
                matrix[i] = new int[square[1]];
                for (int j = 0; j < square[1]; j++)
                {
                    matrix[i][j] = input[j];
                }
            }
            for (int i = 0; i < square[0] - 2; i++)
            {
                for (int j = 0; j < square[1] - 2; j++)
                {
                    int sum = 0;
                    sum += matrix[i][j];
                    sum += matrix[i][j + 1];
                    sum += matrix[i][j + 2];
                    sum += matrix[i + 1][j];
                    sum += matrix[i + 1][j + 1];
                    sum += matrix[i + 1][j + 2];
                    sum += matrix[i + 2][j];
                    sum += matrix[i + 2][j + 1];
                    sum += matrix[i + 2][j + 2];
                    if (sum > max)
                    {
                        max = sum;
                        matrixout[0,0] = matrix[i][j];
                        matrixout[0, 1] = matrix[i][j + 1];
                        matrixout[0, 2] = matrix[i][j + 2];
                        matrixout[1, 0] = matrix[i + 1][j];
                        matrixout[1, 1] = matrix[i + 1][j + 1];
                        matrixout[1, 2] = matrix[i + 1][j + 2];
                        matrixout[2, 0] = matrix[i + 2][j];
                        matrixout[2, 1] = matrix[i + 2][j + 1];
                        matrixout[2, 2] = matrix[i + 2][j + 2];
                    }
                }
            }
            Console.WriteLine("Sum = " + max);
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(matrixout[i, j] + " ");
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
