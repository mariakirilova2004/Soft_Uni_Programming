using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    class Vehicle
    {
        public double DefaultFuelConsumption  { get; set; }
        public virtual double FuelConsumption  { get; set; }
        public double Fuel  { get; set; }
        public int HorsePower { get; set; }

        public virtual void Drive(double kilometers)
        {
            Fuel -= FuelConsumption * kilometers;
        }

        public Vehicle(double fuel, int horsePower)
        {
            Fuel = fuel;
            HorsePower = horsePower;
            DefaultFuelConsumption = 1.25;
            FuelConsumption = DefaultFuelConsumption;
        }
    }
}
