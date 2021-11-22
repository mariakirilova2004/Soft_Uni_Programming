using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public class Truck : IVehicle
    {
        public Truck(double fuelQ, double fuelC, double tankC)
        {
            this.tankC = tankC;
            if (this.tankC < fuelQ) this.fuelQ = 0;
            else this.fuelQ = fuelQ;
            this.fuelC = fuelC + 1.6;
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
            if (km * fuelC <= fuelQ)
            {
                fuelQ -= km * fuelC;
                Console.WriteLine($"Truck travelled {km} km");
            }
            else
            {
                Console.WriteLine($"Truck needs refueling");
            }
        }

        public void Refuel(double l)
        {
            if (l <= 0) throw new ArgumentException($"Fuel must be a positive number");

            if (l * 0.95 + fuelQ > tankC)
            {
                throw new ArgumentException($"Cannot fit {l} fuel in the tank");
            }
            else fuelQ += (l * 0.95);
        }
    }
}
