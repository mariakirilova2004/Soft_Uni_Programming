using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad5
{
    public class Team
    {
        public List<string> Members { get; set; }

        public string Name { get; set; }

        public string Leader { get; set; }

        public Team(string lead, string name)
        {
            Leader = lead;
            Name = name;
            Members = new List<string>();
        }
    }
}
