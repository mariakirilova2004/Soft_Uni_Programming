using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad8
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Queue<char> data = new Queue<char>();
            Queue<char> data1 = new Queue<char>();
            int br = -1;
            if(input.Length % 2 == 0)
            {
                br = 0;
                for (int i = input.Length / 2; i < input.Length; i++)
                {
                    data.Enqueue(input[i]);
                }
                for (int i = input.Length / 2 - 1; i >= 0; i--)
                {
                    data1.Enqueue(input[i]);
                }
                for (int i = 0; i < input.Length / 2; i++)
                {
                    if (data1.Peek() == '(' && ')' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else if (data1.Peek() == '[' && ']' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else if (data1.Peek() == '{' && '}' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else if (data1.Peek() == ')' && '(' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else if (data1.Peek() == ']' && '[' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else if (data1.Peek() == '}' && '{' == data.Peek())
                    {
                        br++;
                        data.Dequeue();
                        data1.Dequeue();
                    }
                    else break;
                }
            }
            if(br == input.Length / 2) Console.WriteLine("YES");
            else Console.WriteLine("NO");
            Console.ReadKey();
        }
    }
}
