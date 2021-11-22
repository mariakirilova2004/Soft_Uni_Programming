using System;
using System.Collections.Generic;
using System.Text;

namespace zad6
{
    class Box<T> where T: IComparable
    {
        public List<T> list;
        public Box(List<T> list)
        {
            this.list = list;
        }
        public int Compare<T>(T element)
        {
            int count = 0;
            foreach (var item in list)
            {
                if (item.CompareTo(element) > 0) count++;
            }
            return count;
        }
    }
}
