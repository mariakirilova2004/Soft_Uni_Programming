using System;
using System.Linq;

namespace zad3
{
    class StartUp
    {
        static void Main(string[] args)
        {
            string command = "";
            Stack<string> list = new Stack<string>(); ;
            while ((command = Console.ReadLine()) != "END")
            {
                var curr = command.Split(" ");
                if (curr[0] == "Push")
                {
                    curr = curr.Skip(1).ToArray();
                    for (int i = 0; i < curr.Length; i++)
                    {
                        curr[i] = curr[i].Replace(",", string.Empty);
                    }
                    list.Push(curr);
                }
                if(curr[0] == "Pop")
                {
                    try
                    {
                        list.Pop();
                    }
                    catch(ArgumentException e)
                    {
                        Console.WriteLine(e.Message);
                    }
                }
            }
            list.Print();
            list.Print();
        }
    }
}
