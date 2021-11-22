using System;
using System.Collections.Generic;
using System.Text;

namespace Wild_Farm
{
    public class Cat: Feline
    {
        public Cat(string name, double weight, int foodEaten, string livingRegion, string breed) : base(name, weight, foodEaten, livingRegion, breed)
        {
        }
        public override void Ask()
        {
            Console.WriteLine("Meow");
        }
    }
}
