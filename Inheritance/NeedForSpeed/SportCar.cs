using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    class SportCar : Car
    {
        public SportCar(double fuel, int horsePower) : base(fuel, horsePower)
        {
            Fuel = fuel;
            HorsePower = horsePower;
            DefaultFuelConsumption = 10;
            FuelConsumption = DefaultFuelConsumption;
        }
    }
}
