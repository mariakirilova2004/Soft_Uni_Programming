using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    public class Coffee : HotBeverage
    {
        public double CoffeeMilliliters { get; set; }
        public decimal CoffeePrice { get; set; }
        public double Caffeine  { get; set; }
        public Coffee(string name, decimal price, double milliliters) : base(name, price, milliliters)
        {
            Name = name;
            Price = price;
            CoffeeMilliliters = 50;
            CoffeePrice = 3.50m;
        }
    }
}
