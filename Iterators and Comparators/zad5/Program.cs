using System;
using System.Collections.Generic;
using System.Linq;

namespace zad5
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();
            string[] curr = Console.ReadLine().Split().ToArray();
            while (curr[0] != "END")
            {
                Person z = new Person(curr[0], int.Parse(curr[1]), curr[2]);
                people.Add(z);
                curr = Console.ReadLine().Split().ToArray();
            }
            int ind = int.Parse(Console.ReadLine());
            Person p = people[ind - 1];
            int br = 0;
            foreach (var item in people)
            {
                if (p.CompareTo(item) == 1 && p != item) br++;
            }
            if (br == 0) Console.WriteLine("No matches");
            else Console.WriteLine($"{br + 1} {people.Count - br - 1} {people.Count}");
        }
    }
}
