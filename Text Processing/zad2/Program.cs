using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Console.WriteLine(M(input[0], input[1]));
            Console.ReadKey();
        }
        static int M(string input1, string input2)
        {
            int sum = 0;
            if(input1.Length < input2.Length)
            {
                int i;
                for (i = 0; i < input1.Length; i++)
                {
                    sum += (int)input1[i] * (int)input2[i];
                }
                for (int j = i; j < input2.Length; j++)
                {
                    sum += (int)input2[j];
                }
            }
            else if(input1.Length > input2.Length)
            {
                int i;
                for (i = 0; i < input2.Length; i++)
                {
                    sum += (int)input2[i] * (int)input1[i];
                }
                for (int j = i; j < input1.Length; j++)
                {
                    sum += (int)input1[j];
                }
            }
            else
            {
                int i;
                for (i = 0; i < input2.Length; i++)
                {
                    sum += (int)input2[i] * (int)input1[i];
                }
            }
            return sum;
        }
    }
}
