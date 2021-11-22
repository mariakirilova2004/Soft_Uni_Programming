using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Program
    {
        static void Main(string[] args)
        {
            StreamWriter sw = new StreamWriter("text.txt");
            sw.WriteLine("-I was quick to judge him, but it wasn't his fault.");
            sw.WriteLine("-Is this some kind of joke?! Is it?");
            sw.WriteLine("-Quick, hide here. It is safer.");
            sw.Close();
            StreamReader sr = new StreamReader("text.txt");
            for (int i = 0; i < 3; i++)
            {
                string curr = sr.ReadLine();
                Console.Write($"Line {i + 1}:");
                Console.Write(curr);
                int br = 0;
                for (int j = 0; j < curr.Length; j++)
                {
                    if(curr[j] == '.' || curr[j] == '-' || curr[j] == ',' || curr[j] == '!' || curr[j] == '?' || curr[j] == '\'')
                    {
                        br++;
                    }
                }
                Console.Write($" ({curr.Length})({br})");
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
