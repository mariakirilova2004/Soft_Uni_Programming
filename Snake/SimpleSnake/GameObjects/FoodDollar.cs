using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleSnake.GameObjects
{
    public class FoodDollar : Food
    {
        public FoodDollar(Wall wall) : base(wall, '$', 2)
        {
        }
    }
}
