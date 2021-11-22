using System;
using System.Collections.Generic;
using System.Linq;

namespace Raiding
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            List<BaseHero> heros = new List<BaseHero>();
            while(num > 0)
            { 
                string name = Console.ReadLine();
                string type = Console.ReadLine();
                if (type == "Druid")
                {
                    heros.Add(new Druid(name));
                    num--;
                }
                else if (type == "Paladin")
                {
                    heros.Add(new Paladin(name));
                    num--;
                }
                else if (type == "Rogue")
                {
                    heros.Add(new Rogue(name));
                    num--;
                }
                else if (type == "Warrior")
                {
                    heros.Add(new Warrior(name));
                    num--;
                }
                else Console.WriteLine("Invalid hero!");
            }
            Boss boss = new Boss(int.Parse(Console.ReadLine()));
            foreach (var hero in heros)
            {
                Console.WriteLine(boss.Damage(hero));
            }
            boss.IsDead();
        }
    }
}
