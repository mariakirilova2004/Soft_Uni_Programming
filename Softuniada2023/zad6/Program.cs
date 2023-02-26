using System;

public class Program
{
    public static void Main()
    {
        int[] nums = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
        int curr;
        int sum = 0;
        int ans = int.MinValue;
        int start = 1;
        int end = 0;
        int ansStart = 0;
        int ansEnd = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            curr = nums[i];
            end++;
            sum += curr;
            if (sum > ans)
            {
                ans = sum;
                ansStart = start;
                ansEnd = end;
            }
            else if (sum == ans && (ansEnd - ansStart) < (end - start))
            {
                ansStart = start;
                ansEnd = end;
            }
            if (sum < 0)
            {
                start = i + 2;
                sum = 0;
            }
        }
        Console.WriteLine(ans + " " + (ansStart - 1) + " " + (ansEnd - 1));
    }
}
