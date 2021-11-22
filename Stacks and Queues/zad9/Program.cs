using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad9
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<string> stack = new Stack<string>();
            int commands = int.Parse(Console.ReadLine());
            for (int i = 0; i < commands; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                if(int.Parse(input[0]) == 1)
                {
                    stack.Push(input[1]);
                }
                if (int.Parse(input[0]) == 2)
                {
                    string str = stack.Peek();
                    str = str.Substring(0, str.Length - int.Parse(input[1]));
                    stack.Push(str);
                }
                if (int.Parse(input[0]) == 3)
                {
                    string str = stack.Peek();
                    Console.WriteLine(str[int.Parse(input[1]) - 1]);
                }
                if (int.Parse(input[0]) == 4)
                {
                    stack.Pop();
                }
            }
            Console.ReadKey();
        }
    }
}
