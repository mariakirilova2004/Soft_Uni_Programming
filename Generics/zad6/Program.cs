using System;
using System.Collections.Generic;

namespace zad6
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            List<double> list = new List<double>();
            for (int i = 0; i < num; i++)
            {
                var el = double.Parse(Console.ReadLine());
                list.Add(el);
            }
            double value = double.Parse(Console.ReadLine());
            Box<double> listrez = new Box<double>(list);
            Console.WriteLine(listrez.Compare(value));
        }
    }
}
