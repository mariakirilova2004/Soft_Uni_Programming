using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LIst5
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> row = Console.ReadLine().Split().Select(int.Parse).ToList();
            int[] bomb = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int sum = 0;
            while(true)
            {
                if (row.Contains(bomb[0]))
                {
                    int index = row.IndexOf(bomb[0]);
                    for (int i = 0; i < bomb[1]; i++)
                    {
                        if (index - 1 < 0) break;
                        row.RemoveAt(index - 1);
                        index -= 1;
                    }
                    index = row.IndexOf(bomb[0]);
                    for (int i = 0; i < bomb[1]; i++)
                    {
                        if (index + 1 >= row.Count) break;
                        row.RemoveAt(index + 1);
                        index += 1;
                    }
                    index = row.IndexOf(bomb[0]);
                    row.RemoveAt(index);
                }
                else break;
            }
            foreach (var item in row)
            {
                sum += item;
            }
            Console.WriteLine(sum);
            Console.ReadKey();
        }
    }
}
