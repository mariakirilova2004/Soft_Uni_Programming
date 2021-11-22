using System;
using System.Collections.Generic;
using System.Text;

namespace Border_Control
{
    public interface IRobot
    {
        public string Model { get; set; }
        public string Id { get; set; }
    }
}
