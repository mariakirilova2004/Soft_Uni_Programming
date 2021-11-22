using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TextProcessing
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] list = Console.ReadLine().Split(',').ToArray();
            for (int i = 0; i < list.Length; i++)
            {
                list[i] = list[i].Trim();
            }
            List<string> ans = new List<string>();
            int br = 0;
            foreach (var inputString in list)
            {
                br = 0;
                if(inputString.Length > 3 && inputString.Length < 16)
                {
                    for (int i = 0; i < inputString.Length; i++)
                    {
                        if (char.IsLetter(inputString[i]) || char.IsDigit(inputString[i]) || inputString[i] == '_' || inputString[i] == '-')
                        {
                            br++;
                        }
                    }
                }
                if (br == inputString.Length) ans.Add(inputString);
            }
            foreach (var item in ans)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
}
