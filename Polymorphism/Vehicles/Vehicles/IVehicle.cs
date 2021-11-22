using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public interface IVehicle
    {
        public double tankC { get; set; }
        public double fuelQ { get; set; }
        public double fuelC { get; set; }
        public void Drive(double km);
        public void Refuel(double l);
    }
}
