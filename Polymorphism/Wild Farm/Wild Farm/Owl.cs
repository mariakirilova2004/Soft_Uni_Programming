using System;
using System.Collections.Generic;
using System.Text;

namespace Wild_Farm
{
    class Owl : Bird
    {
        public Owl(string name, double weight, int foodEaten, double wingSize) : base(name, weight, foodEaten, wingSize)
        {

        }
        public override void Ask()
        {
            Console.WriteLine("Hoot Hoot");
        }
    }
}
