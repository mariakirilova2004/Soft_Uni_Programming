using System;

class Program
{
    static int findSplit(int[] arr, int n)
    {
        int i;

        // variable to store prefix sum
        int preSum = 0;

        // variables to store indices which
        // have prefix sum divisible by S/3.
        int ind1 = -1, ind2 = -1;

        // variable to store sum of
        // entire array.
        int S;

        // Find entire sum of the array.
        S = arr[0];
        for (i = 1; i < n; i++)
            S += arr[i];

        // Check if array can be split in
        // three equal sum sets or not.
        if (S % 3 != 0)
            return 0;

        // Variables to store sum S/3
        // and 2*(S/3).
        int S1 = S / 3;
        int S2 = 2 * S1;

        // Loop until second last index
        // as S2 should not be at the last
        for (i = 0; i < n - 1; i++)
        {
            preSum += arr[i];

            // If prefix sum is equal to S/3
            // store current index.
            if (preSum == S1 && ind1 == -1)
                ind1 = i;

            // If prefix sum is equal to S/3
            // store current index.
            else if (preSum == S2 && ind1 != -1)
            {
                ind2 = i;

                // Come out of the loop as both the
                // required indices are found.
                break;
            }
        }

        // If both the indices are found
        // then print them.
        if (ind1 != -1 && ind2 != -1)
        {
            return 1;
        }

        // If indices are not found return 0.
        return 0;
    }

    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        List<bool> bools = new List<bool>();
        for (int i = 0; i < n; i++)
        {
            int[] array = Console.ReadLine().Split().Select(int.Parse).ToArray();
            bools.Add(findSplit(array, array.Length)==1?true:false);
        }
        foreach (var item in bools)
        {
            Console.WriteLine(item);
        }
    }
}