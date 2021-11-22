using System;
using System.Collections.Generic;
using System.Text;

namespace ClassBoxData
{
    class Box
    {
        private double length;

        public double Length
        {
            get { return length; }
            set
            {
                if (value <= 0) throw new ArgumentException("Length cannot be zero or negative.");
                else length = value;
            }
        }

        private double width;

        public double Width
        {
            get { return width; }
            set
            {
                if (value <= 0) throw new ArgumentException("Width cannot be zero or negative.");
                else width = value;
            }
        }

        private double height;

        public double Height
        {
            get { return height; }
            set
            {
                if (value <= 0) throw new ArgumentException("Height cannot be zero or negative.");
                else height = value;
            }
        }

        public Box(double length, double width, double height)
        {
            Length = length;
            Width = width;
            Height = height;
        }

        public double SurfaceArea()
        {
            return (this.Height * this.Length) * 2 + (this.Height * this.Width) * 2 + (this.Width * this.Length) * 2;
        }

        public double LateralSurfaceArea()
        {
            return (this.Height * this.Length) * 2 + (this.Height * this.Width) * 2;
        }

        public double Volume()
        {
            return this.Height * this.Length * this.Width;
        }
    }
}
