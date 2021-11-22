using System;
using System.Collections.Generic;
using System.Text;

namespace Wild_Farm
{
    public class Mouse : Mammal
    {
        public Mouse(string name, double weight, int foodEaten, string livingRegion) : base(name, weight, foodEaten, livingRegion)
        {
        }
        public override void Ask()
        {
            Console.WriteLine("Squeak");
        }
    }
}
