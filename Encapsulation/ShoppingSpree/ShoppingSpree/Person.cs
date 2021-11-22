using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    class Person
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

        private double money;

        public double Money
        {
            get { return money; }
            set
            {
                if (value < 0) throw new ArgumentException("Money cannot be negative");
                else money = value;
            }
        }

        private List<Product> products;

        public Person(string name, double money)
        {
            Name = name;
            Money = money;
            products = new List<Product>();
        }

        public string BuyProduct(Product product)
        {
            if (money >= product.Cost)
            {
                money -= product.Cost;
                products.Add(product);
                return $"{this.Name} bought {product.Name}";
            }
            else
            {
                return $"{this.Name} can't afford {product.Name}";
            }
        }
        public override string ToString()
        {
            StringBuilder str = new StringBuilder();
            str.Append(this.Name + " -");
            if (products.Count == 0) str.AppendLine(" Nothing bought");
            else
            {
                for (int i = 0; i < products.Count - 1; i++)
                {
                    str.Append($" {products[i].Name},");
                }
                str.Append($" {products[products.Count - 1].Name}");
            }
            return str.ToString();
        }
    }
}
