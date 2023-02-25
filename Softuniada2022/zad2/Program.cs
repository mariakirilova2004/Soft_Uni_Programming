using System;
using System.Text;

namespace zad2
{
    public class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            string name = Console.ReadLine();

            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.Append(Foam(a));

            stringBuilder.Append(Up(a, name));

            stringBuilder.Append(Down(a));

            Console.WriteLine(stringBuilder);
        }

        static string Foam(int a)
        {
            StringBuilder stringBuilder = new StringBuilder();

            for (int i = 0; i < a; i++)
            {
                string str = new String(' ', a);
                for (int j = 0; j < 3; j++)
                {
                    str += '~';
                    str += ' ';
                }

                stringBuilder.AppendLine(str);
            }

            return stringBuilder.ToString();
        }

        static string Up(int a, string name)
        {
            
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.AppendLine(new String('=', (a * 3 + 5)));


            for (int i = 0; i < Math.Ceiling((double)(((decimal)a - 3)/2)); i++)
            {
                stringBuilder.AppendLine("|" + new String('~', a * 2 + 4) + "|" + new String(' ', a - 1) + "|");
            }

            stringBuilder.AppendLine("|" + new String('~', a) + name.ToUpper() + new String('~', a) + "|" + new String(' ', a - 1) + "|");

            for (int i = 0; i < ((a % 2 != 0)? ((a - 3) / 2) : Math.Ceiling((double)(((decimal)a - 3) / 2 - 1))); i++)
            {
                stringBuilder.AppendLine("|" + new String('~', a * 2 + 4) + "|" + new String(' ', a - 1) + "|");
            }

            stringBuilder.AppendLine(new String('=', (a * 3 + 5)));

            return stringBuilder.ToString();
        }

        static string Down (int a)
        {
            StringBuilder stringBuilder = new StringBuilder();

            for (int i = 0; i < a; i++)
            {
                string str = new String(' ', i) + "\\";

                str += new String('@', (a * 2 + 4 - (i*2)));

                str += "/";

                stringBuilder.AppendLine(str);
            }
;           stringBuilder.AppendLine(new String('-', a * 3 + 5));
            return stringBuilder.ToString();
        }
    }
}