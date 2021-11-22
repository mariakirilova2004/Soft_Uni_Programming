using System;

namespace ClassBoxData
{
    class Program
    {
        static void Main(string[] args)
        {
            double l = double.Parse(Console.ReadLine());
            double w = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());
            try
            {
                var box = new Box(l, w, h);
                Console.WriteLine($"Surface Area - {box.SurfaceArea():0.00}");
                Console.WriteLine($"Lateral Surface Area - {box.LateralSurfaceArea():0.00}");
                Console.WriteLine($"Volume - {box.Volume():0.00}");
            }
            catch (ArgumentException e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
