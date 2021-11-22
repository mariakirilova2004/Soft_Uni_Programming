using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List6
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> deck1 = Console.ReadLine().Split().Select(int.Parse).ToList();
            List<int> deck2 = Console.ReadLine().Split().Select(int.Parse).ToList();
            while(true)
            {
                if (deck1[0] > deck2[0])
                {
                    deck1.Add(deck1[0]);
                    deck1.Add(deck2[0]);
                    deck1.RemoveAt(0);
                    deck2.RemoveAt(0);
                }
                if (deck1.Count == 0 || deck2.Count == 0) break;
                if (deck1[0] < deck2[0])
                {
                    deck2.Add(deck2[0]);
                    deck2.Add(deck1[0]);
                    deck1.RemoveAt(0);
                    deck2.RemoveAt(0);
                }
                if (deck1.Count == 0 || deck2.Count == 0) break;
                if (deck1[0] == deck2[0])
                {
                    deck1.RemoveAt(0);
                    deck2.RemoveAt(0);
                }
                if (deck1.Count == 0 || deck2.Count == 0) break;
            }
            int sum = 0;
            if(deck2.Count == 0)
            {
                foreach (var item in deck1)
                {
                    sum += item;
                }
                Console.WriteLine($"First player wins! Sum: {sum}");
            }
            else
            {
                foreach (var item in deck2)
                {
                    sum += item;
                }
                Console.WriteLine($"Second player wins! Sum: {sum}");
            }
            Console.ReadKey();
        }
    }
}
