using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    public class Beverage : Product
    {
        public double Millilitires { get; set; }
        public Beverage(string name, decimal price, double milliliters) : base(name, price)
        {
            Name = name;
            Price = price;
            Millilitires = milliliters;
        }
    }
}
