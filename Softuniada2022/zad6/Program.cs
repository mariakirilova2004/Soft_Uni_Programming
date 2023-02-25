using System;

namespace zad6
{
    public class Program
    {
        public static List<int> heights = new List<int>();

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<Box> items = new List<Box>();

            for (int i = 0; i < n; i++)
            {
                int[] pr = Console.ReadLine().Split().Select(int.Parse).ToArray();
                Box box = new Box(pr[0], pr[1], pr[2]);
                items.Add(box);
            }


            int max = MaxStackHeight(items.ToArray(), items.Count);

            Console.WriteLine(max);
        }

        public class Box
        {
            public int h, w, d, area;
            public Box(int h, int w, int d)
            {
                this.h = h;
                this.w = w;
                this.d = d;
            }

            public bool IsSmallerThan(Box other)
            {
                return this.w * this.d < other.w * other.d;
            }
        }
        public static int MaxStackHeight(Box[] arr, int n)
        {
            // Create an array of all rotations of
            // given boxes. For example, for a box {1, 2, 3},
            // we consider three instances{{1, 2, 3},
            // {2, 1, 3}, {3, 1, 2}}
            Box[] rot = new Box[3 * n];

            for (int i = 0; i < n; i++)
            {
                Box box = arr[i];
                // Copy the original box
                rot[3 * i] = new Box(box.h, Math.Max(box.w, box.d), Math.Min(box.w, box.d));

                // First rotation of the box
                rot[3 * i + 1] = new Box(box.w, Math.Max(box.h, box.d), Math.Min(box.h, box.d));

                // Second rotation of the box
                rot[3 * i + 2] = new Box(box.d, Math.Max(box.w, box.h), Math.Min(box.h, box.w));
            }

            // Calculating base area ofeach of the boxes
            for (int i = 0; i < 3 * n; i++)
                rot[i].area = rot[i].w * rot[i].d;

            // Sort the array 'rot[]' in non-increasing
            // order of base area
            Array.Sort(rot, (a, b) => b.IsSmallerThan(a) ? -1 : 1);

            int count = 3 * n;

            // Initialize msh values for all indexes
            // msh[i] --> Maximum possible Stack Height
            // with box i on top
            int[] msh = new int[count];

            for (int i = 0; i < count; i++)
                msh[i] = rot[i].h;

            // Compute optimized msh values
            // in bottom up manner
            for (int i = 0; i < count; i++)
            {
                msh[i] = 0;
                Box box = rot[i];
                int val = 0;

                for (int j = 0; j < i; j++)
                {
                    Box prevBox = rot[j];
                    if (box.w < prevBox.w && box.d < prevBox.d)
                    {
                        val = Math.Max(val, msh[j]);
                    }
                }
                msh[i] = val + box.h;
            }

            int max = -1;
            for (int i = 0; i < count; i++)
            {
                max = Math.Max(max, msh[i]);
            }

            return max;
        }
    }
}