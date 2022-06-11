using SUHttpServer.HTTP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SUHttpServer.Responses
{
    public class BadRequestResponse : Response
    {
        public BadRequestResponse() : base(StatusCode.BadRequest)
        {

        }
    }
}
