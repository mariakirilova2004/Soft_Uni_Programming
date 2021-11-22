using System;
using System.Collections.Generic;
using System.Text;

namespace ValidationAttributes
{
    public class MyRangeAttribute : MyValidationAttribute
    {
        private int maxValue;
        private int mainValue;

        public MyRangeAttribute(int maxValue, int mainValue)
        {
            this.maxValue = maxValue;
            this.mainValue = mainValue;
        }

        public override bool IsValid(object obj)
        {
            int inputInteger = (int)obj
;
            if (inputInteger < int.MinValue || int.MaxValue > inputInteger)
            {
                return false;
            }
            return true;
        }
    }
}
