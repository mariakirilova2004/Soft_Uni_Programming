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
            string input = Console.ReadLine();
            List<char> ans = new List<char>();
            char last = input[0];
            ans.Add(last);
            int br = 1;
            for (int i = 1; i < input.Length; i++)
            {
                if (last != input[i] && (br != 0 || i == input.Length - 1))
                {
                    br = 0;
                    ans.Add(input[i]);
                }
                else if (last != input[i] && br == 0) ans.Add(input[i]);
                else if (last == input[i] && br == 0) br ++;
                last = input[i];
            }
            Console.WriteLine(string.Join("", ans));
            Console.ReadKey();
        }
    }
}
