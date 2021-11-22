using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad4
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] num = Console.ReadLine().Split().Select(int.Parse).ToArray();
            List<int> rez = new List<int>();
            string command = Console.ReadLine();
            Predicate<int> pred = Pred;
            for (int  i = num[0];  i <= num[1];  i++)
            {
                if(command == "even")
                {
                    if(Pred(i))
                    {
                        rez.Add(i);
                    }
                }
                else
                {
                    if (!Pred(i)) 
                    {
                        rez.Add(i);
                    }
                }
            }
            foreach (var item in rez)
            {
                Console.Write(item + " ");
            }
            Console.ReadKey();
        }

        static bool Pred(int num)
        {
            if (num % 2 == 0) return true;
            else return false;
        }
    }
}
