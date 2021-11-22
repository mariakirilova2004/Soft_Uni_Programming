using System;
using System.Linq;

namespace zad8
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] strings = Console.ReadLine().Split(" ").ToArray();
            string name = strings[0] + " " + strings[1];
            string address = strings[2];
            string town = strings[3];
            if (strings.Length > 4) town += $" {strings[4]}";
            MyTuple<string, string, string> tuple1 = new MyTuple<string, string, string>(name, address, town);
            strings = Console.ReadLine().Split(" ").ToArray();
            name = strings[0];
            int beers = int.Parse(strings[1]);
            string dr = strings[2];
            if (dr == "drunk") dr = "True";
            else dr = "False";
            MyTuple<string, int, string> tuple2 = new MyTuple<string, int, string>(name, beers, dr);
            strings = Console.ReadLine().Split(" ").ToArray();
            name = strings[0];
            double b = double.Parse(strings[1]);
            string bankName = strings[2];
            MyTuple<string, double, string> tuple3 = new MyTuple<string, double, string>(name, b, bankName);
            Console.WriteLine(tuple1.GetValue());
            Console.WriteLine(tuple2.GetValue());
            Console.WriteLine(tuple3.GetValue());
        }
    }
}
