using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementing_Stack_and_Queue
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                //int[] items = Console.ReadLine().Split().Select(int.Parse).ToArray();
                //CustomList list = new CustomList(items);
                //list.Add(5);
                //list.Print();
                //list.Add(7);
                //list.Print();
                //Console.WriteLine(list.Contains(5));
                //Console.WriteLine(list.Contains(518298));
                //list.Insert(3, 67);
                //list.Print();
                //list.RemoveAt(3);
                //list.Print();
                //list.Swap(0, 5);
                //list.Print();

                //CustomStack stack = new CustomStack();
                //stack.Push(1);
                //stack.Push(2);
                //stack.Push(3);
                //stack.Push(4);
                //stack.Push(5);
                //stack.Push(6);
                //stack.Print();
                //Console.WriteLine(stack.Pop());
                //stack.Print();
                //Console.WriteLine(stack.Pop());
                //stack.Print();
                //Console.WriteLine(stack.Peek());
                //stack.Push(56);
                //stack.ForEach(x => Console.WriteLine(x));

                CustomQueue stack = new CustomQueue();
                stack.Enqueue(1);
                stack.Enqueue(2);
                stack.Enqueue(3);
                stack.Enqueue(4);
                stack.Enqueue(5);
                stack.Enqueue(6);
                stack.Print();
                Console.WriteLine(stack.Dequeue());
                stack.Print();
                Console.WriteLine(stack.Dequeue());
                stack.Print();
                Console.WriteLine(stack.Peek());
                stack.Enqueue(56);
                stack.ForEach(x => Console.WriteLine(x));
                stack.Clear();
                stack.Print();
            }
            catch(InvalidOperationException e)
            {
                Console.WriteLine(e.Message);
            }
            Console.ReadKey();
        }
    }
}
