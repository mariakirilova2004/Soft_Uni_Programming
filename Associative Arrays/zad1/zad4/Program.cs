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
            Dictionary<string, double> StockPrice = new Dictionary<string, double>();
            Dictionary<string, int> StockBr = new Dictionary<string, int>();
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "buy") break;

                string[] inputArray = input.Split().ToArray();
                if (StockPrice.ContainsKey(inputArray[0]))
                {
                    StockPrice[inputArray[0]] = double.Parse(inputArray[1]);
                    StockBr[inputArray[0]] += int.Parse(inputArray[2]);
                }
                else
                {
                    StockPrice[inputArray[0]] = double.Parse(inputArray[1]);
                    StockBr[inputArray[0]] = int.Parse(inputArray[2]);
                }
            }
            foreach (var item in StockPrice)
            {
                int br = 0;
                if (StockBr.TryGetValue(item.Key, out br))
                {
                    Console.WriteLine($"{item.Key} -> {item.Value * br:0.00}");
                }
            }
            Console.ReadLine();
        }
    }
}
