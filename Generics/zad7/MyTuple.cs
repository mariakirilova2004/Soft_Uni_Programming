using System;
using System.Collections.Generic;
using System.Text;

namespace zad7
{
    class MyTuple<Item1, Item2>
    {
        public Item1 item1;
        public Item2 item2;

        public MyTuple(Item1 it1, Item2 it2)
        {
            item1 = it1;
            item2 = it2;
        }

        public string GetValue()
        {
            return $"{item1} -> {item2}";
        }
    }
}
