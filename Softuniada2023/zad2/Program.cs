using System;
using System.Text;

namespace zad2
{
    public class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine(Up(n));

            Console.WriteLine(Base(n));

            Console.Write(Down(n));
        }

        public static string Up(int n)
        {
            StringBuilder str = new StringBuilder();

            str.AppendLine(new String('_', (n + 5 - (1)) / 2) + "^" + new String('_', (n + 5 - (1)) / 2));
            str.AppendLine(new String('_', (n + 5 - (3)) / 2) + "/|\\" + new String('_', (n + 5 - (3)) / 2));
            str.Append(new String('_', (n + 5 - (5)) / 2) + "/|||\\" + new String('_', (n + 5 - (5)) / 2));

            return str.ToString();
        }

        public static string Base(int n)
        {
            StringBuilder str = new StringBuilder();

            for (int i = 1; i <= n / 2; i++)
            {
                str.AppendLine(new String('_', (n + 5 - (i * 2 + 5)) / 2) + '/' + new string('.', i) + "|||"+ new string('.', i) + '\\' + new String('_', (n + 5 - (i * 2 + 5)) / 2));
            }

            str.AppendLine(new String('_', (n + 5 - ((n / 2 - 1) * 2 + 5)) / 2) + '/' + new string('.', n / 2 - 1) + "|||" + new string('.', n / 2 - 1) + '\\' + new String('_', (n + 5 - ((n / 2 - 1) * 2 + 5)) / 2));

            for (int i = 0; i < n; i++)
            {
                str.AppendLine(new String('_', (n + 5 - (3)) / 2) + "|||" + new String('_', (n + 5 - (3)) / 2));
            }

            return str.ToString().TrimEnd();
        }

        public static string Down(int n)
        {
            StringBuilder str = new StringBuilder();

            str.AppendLine(new String('_', (n + 5 - (3)) / 2) + "~~~" + new String('_', (n + 5 - (3)) / 2));

            for (int i = 0; i < n / 2; i++)
            {
                str.AppendLine(new String('_', (n + 5 - (i * 2 + 5)) / 2) + "//" + new string('.', i) + "!" + new string('.', i) + "\\\\" + new String('_', (n + 5 - (i * 2 + 5)) / 2));
            }

            return str.ToString();
        }
    }
}