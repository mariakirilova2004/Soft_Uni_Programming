using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppingSpree
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string input = Console.ReadLine();
                List<string> inputl = input.Split(';').ToList();
                List<Person> people = new List<Person>();
                foreach (var person in inputl)
                {
                    string[] info = person.Split('=').ToArray();
                    people.Add(new Person(info[0], double.Parse(info[1])));
                }
                string inputf = Console.ReadLine();
                List<string> inputlf = inputf.Split(';').ToList();
                List<Product> foods = new List<Product>();
                foreach (var food in inputlf)
                {
                    string[] info = food.Split('=').ToArray();
                    if (info[0] != "") foods.Add(new Product(info[0], double.Parse(info[1])));
                }
                while (true)
                {
                    string[] inp = Console.ReadLine().Split().ToArray();
                    if (inp[0] == "END") break;
                    else
                    {
                        foreach (var person in people)
                        {
                            if (person.Name == inp[0])
                            {
                                foreach (var food in foods)
                                {
                                    if (food.Name == inp[1])
                                    {
                                        Console.WriteLine(person.BuyProduct(food));
                                    }
                                }
                            }
                        }
                    }
                }
                foreach (var person in people)
                {
                    Console.WriteLine(person.ToString());
                }
            }
            catch(ArgumentException e)
            {
                Console.WriteLine(e.Message);
            } 
        }
    }
}
