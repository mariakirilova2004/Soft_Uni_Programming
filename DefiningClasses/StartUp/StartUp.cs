using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefiningClasses
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            Person first = new Person();
            first.Name = "Peter";
            first.Age = 20;
            Person second = new Person();
            second.Name = "George";
            second.Age = 18;
            Person third = new Person();
            third.Name = "Jose";
            third.Age = 43;
        }
    }
}
