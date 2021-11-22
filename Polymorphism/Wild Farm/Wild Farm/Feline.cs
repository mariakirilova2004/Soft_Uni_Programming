using System;
using System.Collections.Generic;
using System.Text;

namespace Wild_Farm
{
    public abstract class Feline: Mammal
    {
        public Feline(string name, double weight, int foodEaten, string livingRegion, string breed) : base(name, weight, foodEaten, livingRegion)
        {
            Breed = breed;
        }
        public string Breed { get; set; }
        public override void Ask()
        {
        }
    }
}
