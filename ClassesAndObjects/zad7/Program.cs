using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> list = new List<Person>();
            while(true)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                if (input[0] == "End") break;
                Person p = new Person(input[0], int.Parse(input[1]), int.Parse(input[2]));
                list.Add(p);
            }
            List<Person> list1 = list.OrderByDescending(x => x.Name).ToList();
            foreach (var person in list1)
            {
                Console.WriteLine($"{person.Name} with ID: {person.Id} is {person.Age} years old.");
            }
            Console.ReadKey();
        }
    }
}
