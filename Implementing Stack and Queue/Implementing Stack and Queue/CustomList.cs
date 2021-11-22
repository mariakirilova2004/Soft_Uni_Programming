using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Implementing_Stack_and_Queue
{
    class CustomList
    {
        private const int InitialCapacity = 2;
        private int[] items;
        public int Count { get; set; }
        public CustomList(int[] items)
        {
            this.items = new int[InitialCapacity];
            this.items = items;
            Count = items.Length;
        }

        public int this[int index]
        {
            get
            {
                if(index >= Count)
                {
                    throw new ArgumentException();
                }
                return items[index];
            }
            set
            {
                if(index >= Count)
                {
                    throw new ArgumentException();
                }
                items[index] = value;
            }
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

        public void Add(int item)
        {
            if(this.Count == this.items.Length)
            {
                Resize();
            }
            this.items[this.Count] = item;
            this.Count++;
        }

        public int RemoveAt(int index)
        {
            if(index >= this.Count || index < 0)
            {
                throw new ArgumentException();
            }
            int ans = this.items[index];
            this.items[index] = default(int);
            this.Shift(index);
            this.Count--;
            if (this.Count <= this.items.Length / 4) Shrink();
            return ans;
        }

        private void Shift(int index)
        {
            for (int i = index; i < this.Count; i++)
            {
                this.items[i] = this.items[i + 1];
            }
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

        private void ShiftToRight(int index)
        {
            for (int i = this.Count; i > index; i--)
            {
                this.items[i] = this.items[i - 1];
            }
        }

        public void Insert(int index, int element)
        {
            if(index >= this.Count)
            {
                throw new ArgumentException();
            }
            if (this.Count == this.items.Length)
            {
                Resize();
            }
            this.ShiftToRight(index);
            this.items[index] = element;
            this.Count++;
        }

        public bool Contains(int Element)
        {
            int br = 0;
            for (int i = 0; i < Count; i++)
            {
                if (this.items[i] == Element)
                {
                    br++;
                    break;
                }
            }
            if (br != 0) return true;
            else return false;
        }

        public void Swap(int FirstIndex, int SecondIndex)
        {
            if(FirstIndex >= this.Count || FirstIndex < 0 || SecondIndex >= this.Count || SecondIndex < 0)
            {
                throw new ArgumentException();
            }
            int first = this.items[FirstIndex];
            int second = this.items[SecondIndex];
            this.items[FirstIndex] = second;
            this.items[SecondIndex] = first;
        }
        public void Print()
        {
            Console.WriteLine(string.Join(" ", this.items));
        }
    }
}
