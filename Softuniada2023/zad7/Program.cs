using System;
using System.Linq;
using System.Numerics;

class Program
{
    public static int verticesCount = 0;
    public static int edgesCount = 0;
    static int[] First = new int[100001];
    static int[] Weight1 = new int[100001];
    static int[] Weight2 = new int[100001];

    public static Edge[] edges = new Edge[100001];
    public static Queue<int> vectors = new Queue<int>();

    public class Edge :IComparable
    {
        public Edge(int a, int b, int ida, int c) 
        {
            this.a = a;
            this.b = b;
            this.ida = ida;
            this.c = c;
        }

        public int a { get; set; }
        public int b { get; set; }
        public int ida { get; set; }
        public int c { get; set; }

        public int CompareTo(object? obj)
        {
            return this.c < (((Edge)obj).c) ? 1 : this.c > (((Edge)obj).c)? -1 : 0;
        }
    }

    static void Main(string[] args)
    {
        verticesCount = int.Parse(Console.ReadLine());
        edgesCount = int.Parse(Console.ReadLine());

        for (int i = 0; i < edgesCount; i++)
        {
            string[] abc = Console.ReadLine().Split().ToArray();
            int a = int.Parse(abc[0]);
            int b = int.Parse(abc[1]);
            int c = int.Parse(abc[2]);

            edges[i]= (new Edge(a, b, i, c));
            Weight2[i] = c;
        }

        IsItInside();

        Array.Sort(edges, 0, edgesCount);

        for (int i = edgesCount - 1; i >= 0; i--)
        {
            int FirstEdge = edges[i].a;
            int SecondEdge = edges[i].b;
            if (Unions(FirstEdge, SecondEdge))
            {
                vectors.Enqueue(edges[i].ida);
            }
        }

        int lng = vectors.Count;
        Console.WriteLine(Weight2[vectors.ElementAt(lng - 1)] + 1);
    }


    public static void IsItInside()
    {
        for (int i = 0; i < verticesCount; i++)
        {
            Weight1[i] = 1;
            First[i] = i;
        }
    }

    public static int ToBeFirst(int index)
    {
        return First[index] = index == First[index] ? index : ToBeFirst(First[index]); 
    }

    public static bool Unions(int FirstV, int Second)
    {
        int Ans1 = ToBeFirst(FirstV);
        int Ans2 = ToBeFirst(Second);
        if (Ans1 == Ans2) return false;

        if (Weight1[Ans1] < Weight1[Ans2])
        {
            First[Ans1] = Ans2;
            Weight1[Ans2] += Weight1[Ans1];
            Weight1[Ans1] = 0;
        }
        else
        {
            First[Ans2] = Ans1;
            Weight1[Ans1] += Weight1[Ans2];
            Weight1[Ans2] = 0;
        }
        return true;
    }
}
