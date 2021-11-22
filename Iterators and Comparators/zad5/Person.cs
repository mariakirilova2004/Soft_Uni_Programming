using System;
using System.Collections.Generic;
using System.Text;

namespace zad5
{
    class Person : IComparable
    {
        public string name;
        public int age;
        public string town;

        public Person(string name, int age, string town)
        {
            this.town = town;
            this.age = age;
            this.name = name;
        }
        public int CompareTo(Person person)
        {
            if (person.name == this.name && person.age == this.age && person.town == this.town) return 1;
            else return 0;
        }

        public int CompareTo(object obj)
        {
            return CompareTo(obj);
        }
    }
}
