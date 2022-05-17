using System;
using System.Collections.Generic;
using System.Text;

namespace ProductShop.Dtos.Outputs
{
    public class SoldProductOutputDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string buyerFirstName { get; set; }
        public string buyerLastName { get; set; }
    }
}
