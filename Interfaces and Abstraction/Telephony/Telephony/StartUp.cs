using System;
using System.Collections.Generic;
using System.Linq;

namespace Telephony
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<string> phones = Console.ReadLine().Split().ToList();
            List<string> sites = Console.ReadLine().Split().ToList();
            Smartphone smartphone = new Smartphone();
            StationaryPhone stationaryPhone = new StationaryPhone();
            foreach (var phone in phones)
            {
                int br = 0;
                for (int i = 0; i < phone.Length; i++)
                {
                    int digit = (int)phone[i];
                    if (digit >= 48 && digit <= 57) br++;
                }
                if (br == phone.Length)
                {
                    if(br == 10)
                    {
                        smartphone.Call(phone);
                    }
                    else
                    {
                        stationaryPhone.Call(phone);
                    }
                }
                else
                {
                    Console.WriteLine("Invalid number!");
                }
            }
            foreach (var site in sites)
            {
                int br = 0;
                for (int i = 0; i < site.Length; i++)
                {
                    int digit = (int)site[i];
                    if (digit >= 48 && digit <= 57) br++;
                }
                if (br == 0)
                {
                    smartphone.Browsing(site);
                }
                else
                {
                    Console.WriteLine("Invalid URL!");
                }
            }
        }
    }
}
