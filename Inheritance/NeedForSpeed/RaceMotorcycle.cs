using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    class RaceMotorcycle : Motorcycle
    {
        public RaceMotorcycle(double fuel, int horsePower) : base(fuel, horsePower)
        {
            Fuel = fuel;
            HorsePower = horsePower;
            DefaultFuelConsumption = 8;
            FuelConsumption = DefaultFuelConsumption;
        }
    }
}
