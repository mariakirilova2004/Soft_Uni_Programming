using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            int square = int.Parse(Console.ReadLine());
            int brk = 0;
            int rez = 0;
            List<int[]> horses = new List<int[]>();
            char[][] matrix = new char[square][];
            for (int i = 0; i < square; i++)
            {
                string input = Console.ReadLine();
                matrix[i] = new char[input.Length];
                for (int j = 0; j < input.Length; j++)
                {
                    matrix[i][j] = input[j];
                    if (input[j] == 'K')
                    {
                        brk++;
                        int[] list = {i, j};
                        horses.Add(list);
                    }
                }
            }
            while(true)
            {
                int maxAttacks = 0;
                int maxCol = 0;
                int maxRow = 0;
                int maxInd = 0;
                for (int i = 0; i < horses.Count; i++)
                {
                    int currAttacks = 0;
                    if (IsInside(matrix, horses[i][0] - 2, horses[i][1] + 1) && matrix[horses[i][0] - 2][horses[i][1] + 1] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] - 1, horses[i][1] + 2) && matrix[horses[i][0] - 1][horses[i][1] + 2] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] + 1, horses[i][1] + 2) && matrix[horses[i][0] + 1][horses[i][1] + 2] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] + 2, horses[i][1] + 1) && matrix[horses[i][0] + 2][horses[i][1] + 1] == 'K')
                    {
                        currAttacks++;
                    }

                    if (IsInside(matrix, horses[i][0] - 2, horses[i][1] - 1) && matrix[horses[i][0] - 2][horses[i][1] - 1] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] - 1, horses[i][1] - 2) && matrix[horses[i][0] - 1][horses[i][1] - 2] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] + 1, horses[i][1] - 2) && matrix[horses[i][0] + 1][horses[i][1] - 2] == 'K')
                    {
                        currAttacks++;
                    }
                    if (IsInside(matrix, horses[i][0] + 2, horses[i][1] - 1) && matrix[horses[i][0] + 2][horses[i][1] - 1] == 'K')
                    {
                        currAttacks++;
                    }
                    if (currAttacks > maxAttacks)
                    {
                        maxAttacks = currAttacks;
                        maxCol = horses[i][1];
                        maxRow = horses[i][0];
                        maxInd = i;
                    }
                }
                if (maxAttacks == 0) break;
                else
                {
                    matrix[maxRow][maxCol] = '0';
                    rez++;
                    horses.RemoveAt(maxInd);
                }
            }
            Console.WriteLine(rez);
            Console.ReadKey();
        }

        private static bool IsInside(char[][] matrix, int col, int row)
        {
            return col >= 0 && row >= 0 && row < matrix.GetLength(0) && col < matrix.GetLength(0);
        }
    }
}
