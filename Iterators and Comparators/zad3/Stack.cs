using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace zad3
{
    class Stack<T> : IEnumerable<T>
    {
        public List<T> elements = new List<T>();

        public void Push(params T[] el)
        {
            foreach (var item in el)
            {
                elements.Add(item);
            }
        }

        public T Pop()
        {
            if (elements.Count == 0) throw new ArgumentException("No elements");
            else
            {
                T rez = elements[LastIndexOf(elements)];
                elements.RemoveAt(elements.Count - 1);
                return rez;
            }
        }

        public void Print()
        {
            elements.Reverse();
            Console.WriteLine(string.Join("\n", elements));
            elements.Reverse();
        }

        private int LastIndexOf(List<T> elements)
        {
            return elements.Count - 1;
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = elements.Count - 1; i >= 0; i--)
            {
                yield return elements[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
