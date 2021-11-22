using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    class Motorcycle : Vehicle
    {
        public Motorcycle(double fuel, int horsePower) : base(fuel, horsePower)
        {
            Fuel = fuel;
            HorsePower = horsePower;
            FuelConsumption = DefaultFuelConsumption;
        }
    }
}
