using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    class Product
    {
        private string name;

        public string Name
        {
            get { return name; }
            set
            {
                if (value == "") throw new ArgumentException("Name cannot be empty");
                else name = value;
            }
        }

        private double cost;

        public double Cost
        {
            get { return cost; }
            set 
            {
                if (value < 0) throw new ArgumentException("Money cannot be negative");
                else cost = value; 
            }
        }

        public Product(string name, double cost)
        {
            Name = name;
            Cost = cost;
        }
    }
}
