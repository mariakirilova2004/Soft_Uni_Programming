using System;
using System.Linq;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] strings = Console.ReadLine().Split(" ").ToArray();
            string name = strings[0] + " " + strings[1];
            string address = strings[2];
            MyTuple<string, string> tuple1 = new MyTuple<string, string>(name, address);
            strings = Console.ReadLine().Split(" ").ToArray();
            name = strings[0];
            int beers = int.Parse(strings[1]);
            MyTuple<string, int> tuple2 = new MyTuple<string, int>(name, beers);
            strings = Console.ReadLine().Split(" ").ToArray();
            int a = int.Parse(strings[0]);
            double b = double.Parse(strings[1]);
            MyTuple<int, double> tuple3 = new MyTuple<int, double>(a, b);
            Console.WriteLine(tuple1.GetValue());
            Console.WriteLine(tuple2.GetValue());
            Console.WriteLine(tuple3.GetValue());
        }
    }
}
