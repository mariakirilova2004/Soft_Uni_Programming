using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad7
{
    class Program
    {
        static void Main(string[] args)
        {
            int stations = int.Parse(Console.ReadLine());
            Queue<int[]> petrols = new Queue<int[]>();
            int br = 0;
            for (int i = 0; i < stations; i++)
            {
                int[] current = Console.ReadLine().Split().Select(int.Parse).ToArray();
                petrols.Enqueue(current);
            }
            for (int i = 0; i < stations; i++)
            {
                br = 0;
                int rez = 0;
                Queue<int[]> petrolsCopy = new Queue<int[]>(petrols);
                for (int j = 0; j < i; j++)
                {
                    int[] curr = petrolsCopy.Peek();
                    petrolsCopy.Dequeue();
                    petrolsCopy.Enqueue(curr);
                }
                for (int j = 0; j < stations; j++)
                {
                    int[] curr = petrolsCopy.Peek();
                    rez += curr[0];
                    if (rez - curr[1] < 0) break;
                    else
                    {
                        rez -= curr[1];
                        petrolsCopy.Dequeue();
                        petrolsCopy.Enqueue(curr);
                        br++;
                    }
                }
                if (br == stations)
                {
                    br = i;
                    break;
                }
            }
            Console.WriteLine(br);
            Console.ReadKey();
        }
    }
}
