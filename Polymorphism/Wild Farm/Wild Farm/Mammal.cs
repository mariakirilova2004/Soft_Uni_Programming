using System;
using System.Collections.Generic;
using System.Text;

namespace Wild_Farm
{
    public abstract class Mammal : Animal
    {
        public Mammal(string name, double weight, int foodEaten, string livingRegion) : base(name, weight, foodEaten)
        {
            LivingRegion = livingRegion;
        }
        public string LivingRegion { get; set; }
        public override void Ask()
        {
        }
    }
}
