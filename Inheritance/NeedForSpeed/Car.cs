using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    class Car : Vehicle
    {
        public Car(double fuel, int horsePower) : base(fuel, horsePower)
        {
            Fuel = fuel;
            HorsePower = horsePower;
            DefaultFuelConsumption = 3;
            FuelConsumption = DefaultFuelConsumption;
        }
    }
}
