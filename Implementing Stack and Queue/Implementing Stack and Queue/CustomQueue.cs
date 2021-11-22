using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementing_Stack_and_Queue
{
    class CustomQueue
    {
        public const int InitialCapacity = 4;
        private int count;

        public int Count
        {
            get { return this.count; }
            private set { count = value; }
        }

        public int[] items { get; set; }
        public CustomQueue()
        {
            this.Count = 0;
            this.items = new int[InitialCapacity];
        }

        public void Enqueue(int element)
        {
            if (this.Count == this.items.Length)
            {
                Resize();
            }
            this.items[this.Count] = element;
            this.Count++;
        }

        public int Dequeue()
        {
            if (this.Count == 0)
            {
                throw new InvalidOperationException("CustomStack is empty");
            }
            if (this.Count <= this.items.Length / 4)
            {
                Shrink();
            }
            int rez = this.items[0];
            this.items[0] = default(int);
            Shift(0);
            this.Count--;
            return rez;
        }

        public int Peek()
        {
            if (this.Count == 0)
            {
                throw new InvalidOperationException("CustomStack is empty");
            }
            int rez = this.items[0];
            return rez;
        }

        public void Clear()
        {
            this.items = new int[this.items.Length];
        }

        public void ForEach(Action<object> Action)
        {
            for (int i = 0; i < this.Count; i++)
            {
                Action(this.items[i]);
            }
        }
        public void Print()
        {
            Console.WriteLine(string.Join(" ", this.items));
        }

        private void Resize()
        {
            int[] copy = new int[this.items.Length * 2];
            for (int i = 0; i < this.items.Length; i++)
            {
                copy[i] = items[i];
            }
            this.items = copy;
        }

        private void Shrink()
        {
            int[] copy = new int[this.items.Length / 2];
            for (int i = 0; i < this.Count; i++)
            {
                copy[i] = this.items[i];
            }
            this.items = copy;
        }

        private void Shift(int index)
        {
            for (int i = index; i < this.Count; i++)
            {
                this.items[i] = this.items[i + 1];
            }
        }
    }
}
