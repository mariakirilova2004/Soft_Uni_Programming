using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Associative_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> list = new Dictionary<string, int>();
            list.Add("fragments", 0);
            list.Add("shards", 0);
            list.Add("motes", 0);
            Dictionary<string, int> listodd = new Dictionary<string, int>();
            int br = 0;
            while (true)
            {
                br = 0;
                string[] input = Console.ReadLine().Split().ToArray();
                for (int i = 0; i < input.Length; i += 2)
                {
                    if(input[i + 1].ToLower() == "fragments" || input[i + 1].ToLower() == "shards" || input[i + 1].ToLower() == "motes")
                    {
                       list[input[i + 1].ToLower()] += int.Parse(input[i]);
                    }
                    else 
                    {
                        if (listodd.ContainsKey(input[i + 1].ToLower())) listodd[input[i + 1].ToLower()] += int.Parse(input[i]);
                        else listodd.Add(input[i + 1].ToLower(), int.Parse(input[i]));
                    }
                    if(list.ContainsKey("fragments") && list["fragments"] >= 250)
                    {
                        list["fragments"] -= 250;
                        br = 2;
                        break;
                    }
                    if (list.ContainsKey("shards") && list["shards"] >= 250)
                    {
                        list["shards"] -= 250;
                        br = 1;
                        break;

                    }
                    if (list.ContainsKey("motes") && list["motes"] >= 250)
                    {
                        list["motes"] -= 250;
                        br = 3;
                        break;

                    }
                }
                if (br != 0) break;
            }
            if (br == 1) Console.WriteLine("Shadowmourne obtained!");
            if (br == 2) Console.WriteLine("Valanyr obtained!");
            if (br == 3) Console.WriteLine("Dragonwrath obtained!");

            var ordered = list.OrderByDescending(x => x.Value).ThenBy(x => x.Key);
            var orderedodd = listodd.OrderBy(x => x.Key).ToList();

            foreach (var item in ordered)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
            foreach (var item in orderedodd)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
            Console.ReadKey();
        }
    }
}
