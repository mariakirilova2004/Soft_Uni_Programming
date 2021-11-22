using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad4
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string ans = "";
            for (int i = 0; i < input.Length; i++)
            {
                int a = (int)input[i] + 3;
                ans += (char)a;
            }
            Console.WriteLine(ans.ToString());
            Console.ReadKey();
        }
    }
}
