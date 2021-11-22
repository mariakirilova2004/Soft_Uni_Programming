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
            string input = Console.ReadLine();
            string[] inputarr = input.Split('.').ToArray();
            int ind = 0;
            int br = 0;
            for (int i = inputarr[0].Length - 1; i >= 0; i--)
            {
                if (inputarr[0][i] == '\\')
                {
                    ind = i;
                    break;
                }
                br++;
            }
            string ans = inputarr[0].Substring(ind + 1, br);
            Console.WriteLine($"File name: {ans}");
            Console.WriteLine($"File extension: {inputarr[1]}");
            Console.ReadKey();
        }
    }
}
