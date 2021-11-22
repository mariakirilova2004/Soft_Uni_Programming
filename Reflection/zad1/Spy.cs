using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace zad1
{
    class Spy
    {
        public StringBuilder StealFieldInfo(string nameClass, params string[] fields)
        {
            StringBuilder str = new StringBuilder();
            Type type = nameClass.GetType();
            FieldInfo[] field = type.GetFields(BindingFlags.Public| BindingFlags.NonPublic| BindingFlags.Static| BindingFlags.Instance); 
            
            return str;
        }
    }
}
