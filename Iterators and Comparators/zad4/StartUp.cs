using System;
using System.Linq;

namespace zad4
{
    class StartUp
    {
        static void Main(string[] args)
        {
            int[] command = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            Lake lake = new Lake(command);
            Console.WriteLine(string.Join(", ", lake));
        }
    }
}
