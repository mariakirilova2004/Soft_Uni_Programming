using System;
using System.Collections.Generic;
using System.Text;

namespace ValidationAttributes
{
    public class Person
    {
        public Person(string name, int age)
        {
            FullName = name;
            Age = age;
        }

        [MyRequired]
        public string FullName { get; set; }

        [MyRange(10, 99)]
        public int Age { get; set; }
    }
}
