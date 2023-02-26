using System;

namespace zad5
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();


            Console.WriteLine(GetLargestNumber(numbers));
        }
        public static string GetLargestNumber(List<int> numbers)
        {
            List<string> numberStrings = numbers.Select(n => n.ToString()).ToList();

            numberStrings.Sort(CompareStrings);

            string largestNumberString = string.Concat(numberStrings);

            return largestNumberString;
        }
        private static int CompareStrings(string a, string b)
        {
            string ab = a + b;
            string ba = b + a;
            return ba.CompareTo(ab); 
        }

    }
}