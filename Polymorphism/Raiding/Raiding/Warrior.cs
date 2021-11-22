using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    class Warrior : BaseHero
    {
        public Warrior(string name) : base(name)
        {
            Name = name;
            Power = 100;
        }

        public override string CastAbility()
        {
            return $"Warrior - {Name} hit for {Power} damage";
        }
    }
}
