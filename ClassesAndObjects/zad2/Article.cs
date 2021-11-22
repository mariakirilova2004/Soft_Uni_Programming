using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Article
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }

        public void Edit(string a)
        {
            Content = a;
        }
        public void ChangeAuthor(string a)
        {
            Author = a;
        }
        public void Rename(string a)
        {
            Title = a;
        }
        public void ToString()
        {
            Console.WriteLine($"{Title} - { Content}: {Author}");
        }
    }
}
