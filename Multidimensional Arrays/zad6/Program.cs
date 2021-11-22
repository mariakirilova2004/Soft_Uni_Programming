using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad6
{
    class Program
    {
        static void Main(string[] args)
        {
            int  square = int.Parse(Console.ReadLine());
            int[][] matrix = new int[square][];
            for (int i = 0; i < square; i++)
            {
                int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();
                matrix[i] = new int[input.Length];
                for (int j = 0; j < input.Length; j++)
                {
                    matrix[i][j] = input[j];
                }
            }
            for (int i = 0; i < square - 1; i++)
            {
                if(matrix[i].Length == matrix[i + 1].Length)
                {
                    for (int j = 0; j < matrix[i].Length; j++)
                    {
                        matrix[i][j] *= 2;
                    }
                    for (int j = 0; j < matrix[i + 1].Length; j++)
                    {
                        matrix[i + 1][j] *= 2;
                    }
                }
                else
                {
                    for (int j = 0; j < matrix[i].Length; j++)
                    {
                        matrix[i][j] /= 2;
                    }
                    for (int j = 0; j < matrix[i + 1].Length; j++)
                    {
                        matrix[i + 1][j] /= 2;
                    }
                }
            }
            while(true)
            {
                string[] commands = Console.ReadLine().Split().ToArray();
                if (commands[0] == "End") break;
                    if (commands[0] == "Add")
                {
                    if(int.Parse(commands[1]) >= 0 && int.Parse(commands[1]) < square)
                    {
                        if(matrix[int.Parse(commands[1])].Length > int.Parse(commands[2]) && int.Parse(commands[2]) >= 0)
                        {
                            matrix[int.Parse(commands[1])][int.Parse(commands[2])] += int.Parse(commands[3]);
                        }
                    }
                }
                if (commands[0] == "Subtract")
                {
                    if (int.Parse(commands[1]) >= 0 && int.Parse(commands[1]) < square)
                    {
                        if (matrix[int.Parse(commands[1])].Length > int.Parse(commands[2]) && int.Parse(commands[2]) >= 0)
                        {
                            matrix[int.Parse(commands[1])][int.Parse(commands[2])] -= int.Parse(commands[3]);
                        }
                    }
                }
            }
            for (int i = 0; i < square; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    Console.Write(matrix[i][j] + " ");
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
