using System;

namespace zad1
{
    public class Program
    {
        public static int n = 0;

        static void Main(string[] args)
        {
            n = int.Parse(Console.ReadLine());
            R(new List<int> { 1 }, 0);
        }
        
        static void R(List<int> nums, int currn)
        {
            if(currn == n)
            {
                Console.WriteLine(String.Join(' ', nums));
                return;
            }

            List<int> nums2 = new List<int>();

            nums2.Add(1);

            for (int i = 0; i < nums.Count - 1; i++)
            {
                nums2.Add(nums[i] + nums[i + 1]);
            }
            nums2.Add(1);

            R(nums2, currn + 1);
        }
    }
}