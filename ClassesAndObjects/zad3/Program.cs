using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad3
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Article> articles = new List<Article>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(',').ToArray();
                Article first = new Article();
                first.Author = input[2];
                first.Content = input[1];
                first.Title = input[0];
                articles.Add(first);
            }
            string input1 = Console.ReadLine();
            if(input1 == "title")
            {
                articles.OrderBy(x => x.Title);
                foreach (var item in articles)
                {
                    item.ToString();
                }
            }
            if (input1 == "content")
            {
                articles.OrderBy(x => x.Content);
                foreach (var item in articles)
                {
                    item.ToString();
                }
            }
            if (input1 == "author")
            {
                articles.OrderBy(x => x.Author);
                foreach (var item in articles)
                {
                    item.ToString();
                }
            }
            Console.ReadKey();
        }
    }
    class Article
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public void ToString()
        {
            Console.WriteLine($"{Title} - { Content}: {Author}");
        }
    }
}
