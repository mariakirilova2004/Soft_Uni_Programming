using SUHttpServer.HTTP;
using SUHttpServer.Responses;
using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace SUHttpServer
{
    public class Program
    {
        private const string HtmlForm = @"<form action = '/HTML' method='POST'>
        Name: <input type='text' name='Name'/>
        Age: <input type='number' name='Age'/>
        <input type='submit' name='Save'/>
        </form>";
        //static void Main(string[] args)
        //{
        //    HttpServer httpServer = new HttpServer("127.0.0.1", 8080);
        //    httpServer.Start();
        //}

        public static void Main()
            => new HttpServer(routes => routes
                .MapGet("/", new TextResponse("Hello from the server!"))
                .MapGet("/HTML", new HtmlResponse(Program.HtmlForm))
                .MapGet("/Redirect", new RedirectResponse("https://softuni.org/"))
                .MapPost("/HTML", new TextResponse("", Program.AddFormDataAction)))
            .Start();

        private static void AddFormDataAction(Request request, Response response)
        {
            response.Body = "";

            foreach (var (key, value) in request.Form)
            {
                response.Body += $"{key} - {value}";
                response.Body += Environment.NewLine;
            }
        }
    }
}