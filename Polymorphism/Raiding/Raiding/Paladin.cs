using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    class Paladin : BaseHero
    {
        public Paladin(string name) : base(name)
        {
            Name = name;
            Power = 100;
        }

        public override string CastAbility()
        {
            return $"Paladin - {Name} healed for {Power}";
        }
    }
}
