using System;
using System.Collections.Generic;
using System.Text;

namespace ProductShop.Dtos.Outputs
{
    public class UserSoldProductsOutputDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public IEnumerable<SoldProductOutputDTO> ProductsSold { get; set; }
    }
}
