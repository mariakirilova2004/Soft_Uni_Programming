using System;
using System.Collections.Generic;
using System.Text;

namespace Border_Control
{
    public class Human : IHuman, IRobot
    {
        public Human(string model, int age, string id)
        {
            Model = model;
            Age = age;
            Id = id;
        }
        public int Age { get; set; }
        public string Id { get; set; }
        public string Model { get; set; }
    }
}
