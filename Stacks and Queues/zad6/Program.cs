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
            string[] input = Console.ReadLine().Split(',').ToArray();
            for (int i = 1; i < input.Length; i++)
            {
                input[i] = input[i].TrimStart();
            }
            Queue<string> music = new Queue<string>(input);
            while(music.Count != 0)
            {
                string current = Console.ReadLine();
                if(current == "Play")
                {
                    music.Dequeue();
                }
                else if(current.Substring(0,3) == "Add")
                {
                    string crr = current.Substring(4, current.Length - 4);
                    if(music.Contains(crr))
                    {
                        Console.WriteLine($"{crr} is already contained!");
                    }
                    else
                    {
                        music.Enqueue(crr);
                    }
                }
                else if(current == "Show")
                {
                    Console.WriteLine(string.Join(", ",music));
                }
            }
            Console.WriteLine("No more songs!");
            Console.ReadKey();
        }
    }
}
