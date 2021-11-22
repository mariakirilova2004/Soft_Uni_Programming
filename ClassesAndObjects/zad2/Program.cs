using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(',').ToArray();
            Article first = new Article();
            first.Author = input[2];
            first.Content = input[1];
            first.Title = input[0];
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                input = Console.ReadLine().Split(':').ToArray();
                if(input[0] == "Edit")
                {
                    first.Content = input[1].Trim();
                }
                if (input[0] == "ChangeAuthor")
                {
                    first.Author = input[1].Trim();
                }
                if (input[0] == "Rename")
                {
                    first.Title = input[1].Trim();
                }
            }
            Console.WriteLine($"{first.Title} - {first.Content}: {first.Author}");
            Console.ReadKey();
        }
    }
}
