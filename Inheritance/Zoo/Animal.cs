﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Zoo
{
    class Animal
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public Animal(string name)
        {
            Name = name;
        }
    }
}
