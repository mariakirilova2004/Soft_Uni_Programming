using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split().Select(int.Parse).ToList();
            int max = int.Parse(Console.ReadLine());
            string[] command;
            while (true)
            {
                command = Console.ReadLine().Split().ToArray();
                if (command[0] == "end") break;
                else if (command[0] == "Add") list.Add(int.Parse(command[1]));
                else
                {
                    int key = -1;
                    foreach (var item in list)
                    {
                        if(item < max && item + int.Parse(command[0]) <= max)
                        {
                            key = list.IndexOf(item);
                            break;
                        }
                    }
                    list[key] += int.Parse(command[0]);
                }
            }
            foreach (var item in list)
            {
                Console.Write(item + " ");
            }
            Console.ReadKey();
        }
    }
}
