using System;
using System.Collections.Generic;
using System.Text;

namespace Telephony
{
    public class Smartphone : IStationaryPhone, ISmartphone
    {
        public void Browsing(string site)
        {
            Console.WriteLine($"Browsing: {site}!");
        }

        public void Call(string number)
        {
            Console.WriteLine($"Calling... {number}");
        }
    }
}
