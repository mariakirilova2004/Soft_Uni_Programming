using System;

namespace zad3
{
    public class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string target = "()";
            int maxLength = 0;
            int currentLength = 0;

            for (int i = 0; i < input.Length - 1; i++)
            {
                if (input.Substring(i, target.Length) == target)
                {
                    currentLength++;
                    if (currentLength > maxLength)
                    {
                        maxLength = currentLength;
                    }
                    i++;
                }
                else
                {
                    currentLength = 0;
                }
            }

            Console.WriteLine(maxLength * 2);
        }
    }
}