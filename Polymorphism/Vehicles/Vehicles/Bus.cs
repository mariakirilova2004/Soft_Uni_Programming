using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    class Bus : IVehicle
    {
        public Bus(double fuelQ, double fuelC, double tankC)
        {
            this.tankC = tankC;
            this.fuelC = fuelC;
            if (this.tankC < fuelQ) this.fuelQ = 0;
            else this.fuelQ = fuelQ;
        }
        public double tankC { get; set; }

        private double fuelq;
        public double fuelQ
        {
            get { return fuelq; }
            set
            {
                fuelq = value;
            }
        }

        public double fuelC { get; set; }
        public void Drive(double km)
        {
            double fuel = fuelC + 1.4;
            if (km * fuel <= fuelQ)
            {
                fuelQ -= km * fuel;
                Console.WriteLine($"Bus travelled {km} km");
            }
            else
            {
                Console.WriteLine($"Bus needs refueling");
            }
        }
        public void DriveEmpty(double km)
        {
            if (km * fuelC <= fuelQ)
            {
                fuelQ -= km * fuelC;
                Console.WriteLine($"Bus travelled {km} km");
            }
            else
            {
                Console.WriteLine($"Bus needs refueling");
            }
        }

        public void Refuel(double l)
        {
            if (l <= 0) throw new ArgumentException($"Fuel must be a positive number");

            if (l + fuelQ > tankC)
            {
                throw new ArgumentException($"Cannot fit {l} fuel in the tank");
            }
            else fuelQ += l;
        }
    }
}
