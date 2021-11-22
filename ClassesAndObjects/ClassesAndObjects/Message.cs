using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesAndObjects
{
    class Message
    {
        string[] Phrases = { "Excellent product.", "Such a great product.", "I always use that product.", "Best product of itscategory.", "Exceptional product.", "I can’t live without this product." };
        string[] Events = { "Now I feel good.", "I have succeeded with this product.", "Makes miracles. I am happy of the results!", "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!" };
        string[] Cities = { "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse" };
        string[] Authors = { "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva" };

        public void Messagetry(int n)
        {
            Random a = new Random();
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine(Phrases[a.Next(0, 5)] + " " + Events[a.Next(0, 5)] + " " + Authors[a.Next(0, 8)] + " - " + Cities[a.Next(0, 4)]);
            }
        }
    }
}
