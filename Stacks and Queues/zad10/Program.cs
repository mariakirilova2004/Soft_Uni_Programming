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
            int green = int.Parse(Console.ReadLine());
            int free = int.Parse(Console.ReadLine());
            int sec = green;
            int sec2 = free;
            int br = 0;
            bool fr = true;
            while(true)
            {
                string input = Console.ReadLine();
                fr = true;
                if (input == "END")
                {
                    Console.WriteLine("Everyone is safe.");
                    Console.WriteLine($"{br} total cars passed the crossroads.");
                    break;
                }
                else
                {
                    if (input != "green")
                    {
                        if (input.Length <= sec && fr)
                        {
                            br++;
                            sec -= input.Length;
                            fr = false;
                        }                      
                        else 
                        {
                            if (input.Length - sec <= sec2)
                            {
                                br++;
                                sec2 -= input.Length - sec;
                                sec = 0;
                            }
                            else if(sec != 0)
                            {
                                Console.WriteLine("A crash happened!");
                                Console.WriteLine($"{input} was hit at {input[input.Length - sec - sec2 + 2]}.");
                                break;
                            }
                        }
                    }
                    else
                    {
                        sec = green;
                        sec2 = free;
                        fr = true;
                    }
                }
            }
            Console.ReadKey();
        }
    }
}
