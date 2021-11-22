using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List4
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split().Select(int.Parse).ToList();
            string[] command;
            while (true)
            {
                command = Console.ReadLine().Split().ToArray();
                if (command[0] == "End") break;
                else if (command[0] == "Insert")
                {
                    if (int.Parse(command[2]) < 0 || int.Parse(command[2]) > list.Count) Console.WriteLine("Invalid index");
                    else list.Insert(int.Parse(command[2]), int.Parse(command[1]));
                }
                else if (command[0] == "Remove")
                {
                    if (int.Parse(command[1]) < 0 || int.Parse(command[1]) > list.Count) Console.WriteLine("Invalid index");
                    else list.RemoveAt(int.Parse(command[1]));
                }
                else if (command[0] == "Add")
                {
                    list.Add(int.Parse(command[1]));
                }
                else
                {
                    if(command[1] == "left")
                    {
                        for (int i = 0; i < int.Parse(command[2]); i++)
                        {
                            int first = list[0];
                            list.RemoveAt(0);
                            list.Add(first);
                        }
                    }
                    else
                    {
                        for (int i = 0; i < int.Parse(command[2]); i++)
                        {
                            int last = list[list.Count - 1];
                            list.RemoveAt(list.Count - 1);
                            list.Insert(0, last);
                        }
                    }
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
