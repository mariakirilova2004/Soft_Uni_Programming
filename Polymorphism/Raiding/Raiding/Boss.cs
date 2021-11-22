using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    public class Boss
    {
        public Boss(int power)
        {
            Power = power;
        }
        private int power;

        public int Power
        {
            get { return power; }
            set { power = value;}
        }
        
        public string Damage(BaseHero hero)
        {
            this.Power -= hero.Power;
            return hero.CastAbility();
        }
        public void IsDead()
        {
            if (Power <= 0) Console.WriteLine("Victory!"); 
            else Console.WriteLine("Defeat...");
        }
    }
}
