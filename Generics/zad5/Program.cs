using System;
using System.Collections.Generic;

namespace zad5
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            List<string> list = new List<string>();
            for (int i = 0; i < num; i++)
            {
                var el = Console.ReadLine();
                list.Add(el);
            }
            string value = Console.ReadLine();
            Box<string> listrez = new Box<string>(list);
            Console.WriteLine(listrez.Compare(value));
        }
    }
}
