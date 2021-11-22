using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    class Rogue : BaseHero
    {
        public Rogue(string name) : base(name)
        {
            Name = name;
            Power = 80;
        }

        public override string CastAbility()
        {
            return $"Rogue - {Name} hit for {Power} damage";
        }
    }
}
