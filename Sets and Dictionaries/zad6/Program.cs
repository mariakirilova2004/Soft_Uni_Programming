using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad6
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> wardrobe = new Dictionary<string, Dictionary<string, int>>();
            int lines = int.Parse(Console.ReadLine());
            for (int i = 0; i < lines; i++)
            {
                string[] input = Console.ReadLine().Split('>').ToArray();
                input[0] = input[0].Remove(input[0].Length - 2, 2);
                input[0] = input[0].TrimEnd();
                input[1] = input[1].Remove(0, 1);
                string[] clothes = input[1].Split(',').ToArray();
                if (wardrobe.ContainsKey(input[0]))
                {
                    for (int j = 0; j < clothes.Length; j++)
                    {
                        if (wardrobe[input[0]].ContainsKey(clothes[j]))
                        {
                            wardrobe[input[0]][clothes[j]]++;
                        }
                        else wardrobe[input[0]].Add(clothes[j], 1);
                    }
                }
                else
                {
                    Dictionary<string, int> curr = new Dictionary<string, int>();
                    for (int j = 0; j < clothes.Length; j++)
                    {
                        if (curr.ContainsKey(clothes[j])) curr[clothes[j]]++;
                        else curr.Add(clothes[j], 1);
                    }
                    wardrobe.Add(input[0], curr);
                }
            }
            string[] command = Console.ReadLine().Split(' ').ToArray();
            int br = 0;
            foreach (var color in wardrobe.Keys)
            {
                if (color == command[0]) br++;
                Console.WriteLine($"{color} clothes:");
                foreach (var clothes in wardrobe[color])
                {
                    
                        Console.Write($"* {clothes.Key} - {clothes.Value} ");
                        if (br == 1 && clothes.Key == command[1]) Console.Write("(found!)");
                        Console.WriteLine();
                }
                br = 0;
            }
            Console.ReadKey();
        }
    }
}
