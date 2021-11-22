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
            List<Student> students = new List<Student>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                Student first = new Student();
                first.FirstName = input[0];
                first.LastName = input[1];
                first.Grade = decimal.Parse(input[2]);
                students.Add(first);
            }
            students.OrderByDescending(x => x.Grade);
            foreach (var item in students)
            {
                item.ToString();
            }
            Console.ReadKey();
        }
    }

    class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal Grade { get; set; }
        
        public void ToString()
        {
            Console.WriteLine($"{FirstName} {LastName}: {Grade}");
        }
    }
}
