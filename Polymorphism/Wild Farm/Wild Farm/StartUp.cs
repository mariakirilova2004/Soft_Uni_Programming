using System;
using System.Collections.Generic;
using System.Linq;

namespace Wild_Farm
{
    class StartUp
    {
        static void Main(string[] args)
        {
            //   •	Felines - "{Type} {Name} {Weight} {LivingRegion} {Breed}"
            //   •	Birds - "{Type} {Name} {Weight} {WingSize}"
            //   •	Mice and Dogs - "{Type} {Name} {Weight} {LivingRegion}"
            List<Animal> animals = new List<Animal>();
            while(true)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                switch (input[0])
                {
                    case "Hen": animals.Add(new Hen(input[1], input));
                    default:
                        break;
                }
            }
        }
    }
}
