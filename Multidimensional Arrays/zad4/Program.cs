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
            int[] square = Console.ReadLine().Split().Select(int.Parse).ToArray();
            string[][] matrix = new string[square[0]][];
            int max = 0;
            for (int i = 0; i < square[0]; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                matrix[i] = new string[square[1]];
                for (int j = 0; j < square[1]; j++)
                {
                    matrix[i][j] = input[j];
                }
            }
            while(true)
            {
                string[] commands = Console.ReadLine().Split().ToArray();
                if (commands[0] == "END") break;
                if (commands[0] == "swap" && int.Parse(commands[1]) >= 0 && int.Parse(commands[1]) < square[0] && int.Parse(commands[2]) >= 0 && int.Parse(commands[2]) < square[1] && int.Parse(commands[3]) >= 0 && int.Parse(commands[3]) < square[0] && int.Parse(commands[4]) >= 0 && int.Parse(commands[4]) < square[1])
                {
                    string curr = matrix[int.Parse(commands[1])][int.Parse(commands[2])];
                    matrix[int.Parse(commands[1])][int.Parse(commands[2])] = matrix[int.Parse(commands[3])][int.Parse(commands[4])];
                    matrix[int.Parse(commands[3])][int.Parse(commands[4])] = curr;
                    for (int i = 0; i < square[0]; i++)
                    {
                        for (int j = 0; j < square[1]; j++)
                        {
                            Console.Write(matrix[i][j] + " ");
                        }
                        Console.WriteLine();
                    }
                }
                else Console.WriteLine("Invalid input!");
            }
            Console.ReadKey();
        }
    }
}
