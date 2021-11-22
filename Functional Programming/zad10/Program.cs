using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad10
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> names = Console.ReadLine().Split().ToList();
            while(true)
            {
                string[] commands = Console.ReadLine().Split().ToArray();
                if (commands[0] == "Party!") break;
                else if(commands[0] == "Remove")
                {
                    if(commands[1] == "StartsWith")
                    {
                        names = names.Where(x => !x.StartsWith(commands[2])).ToList();
                    }
                    if (commands[1] == "EndsWith")
                    {
                        names = names.Where(x => !x.EndsWith(commands[2])).ToList();
                    }
                    if (commands[1] == "Length")
                    {
                        names = names.Where(x => x.Length != int.Parse(commands[2])).ToList();
                    }
                }
                else if (commands[0] == "Double")
                {
                    if (commands[1] == "StartsWith")
                    {
                        for (int i = 0; i < names.Count; i++)
                        {
                            if(names[i].StartsWith(commands[2]))
                            {
                                names.Insert(i+1, names[i].ToString());
                                i++;
                            }
                        }
                    }
                    if (commands[1] == "EndsWith")
                    {
                        for (int i = 0; i < names.Count; i++)
                        {
                            if (names[i].EndsWith(commands[2]))
                            {
                                names.Insert(i + 1, names[i].ToString());
                                i++;
                            }
                        }
                    }
                    if (commands[1] == "Length")
                    {
                        for (int i = 0; i < names.Count; i++)
                        {
                            if (names[i].Count() == int.Parse(commands[2]))
                            {
                                names.Insert(i + 1, names[i].ToString());
                                i++;
                            }
                        }
                    }
                }
            }
            if (names.Count != 0)
                Console.WriteLine($"{string.Join(", ", names)} are going to the party!");
            else
                Console.WriteLine("Nobody is going to the party!");
            Console.ReadKey();
        }
    }
}
