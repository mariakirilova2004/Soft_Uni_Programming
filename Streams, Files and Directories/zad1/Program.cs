using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad1
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
                string[] curr = sr.ReadLine().Split();
                if (i == 0 || i==2 || i==4 || i==6 || i==8)
                {
                    for (int j = 0; j < curr.Length; j++)
                    {
                        curr[j] = curr[j].Replace('-', '@').Replace(',', '@').Replace('.', '@').Replace('!', '@').Replace('?', '@');
                    }
                    curr = curr.Reverse().ToArray();
                    Console.WriteLine(string.Join(" ",curr));
                }
            }
            Console.ReadKey();
        }
    }
}
