using System;
using System.Collections.Generic;
using System.Text;

namespace zad8
{
    class MyTuple<Item1, Item2, Item3>
    {
        public Item1 item1;
        public Item2 item2;
        public Item3 item3;

        public MyTuple(Item1 it1, Item2 it2, Item3 it3)
        {
            item1 = it1;
            item2 = it2;
            item3 = it3;
        }

        public string GetValue()
        {
            return $"{item1} -> {item2} -> {item3}";
        }
    }
}
