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
        private const string DownloadForm = @"<form action = '/Content' method='POST'>
        <input type='submit' value='Download Sites Content'/>
        </form>";

        private const string FileName = "content.txt";

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

        public static async Task Main()
        {
            await DownloadSitesAsTextFile(Program.FileName, new string[] { "https://judge.softuni.org/", "https://softuni.org/" });

            var server = new HttpServer(routes => routes
                .MapGet("/", new TextResponse("Hello from the server!"))
                .MapGet("/HTML", new HtmlResponse(Program.HtmlForm))
                .MapGet("/Redirect", new RedirectResponse("https://softuni.org/"))
                .MapGet("/Content", new HtmlResponse(Program.DownloadForm))
                .MapGet("/Content", new TextFileResponse(Program.FileName))
                .MapPost("/HTML", new TextResponse("", Program.AddFormDataAction)));
            await server.Start();
        }

        private static void AddFormDataAction(Request request, Response response)
        {
            response.Body = "";

            foreach (var (key, value) in request.Form)
            {
                response.Body += $"{key} - {value}";
                response.Body += Environment.NewLine;
            }
        }

        private static async Task<string> DownloadWebSiteContent(string url)
        {
            var httpClient = new HttpClient();
            using (httpClient)
            {
                var response = await httpClient.GetAsync(url);

                var html = await response.Content.ReadAsStringAsync();

                return html.Substring(0, 200);
            
            }
        }

        private static async Task DownloadSitesAsTextFile(string fileName, string[] urls)
        {
            var downloads = new List<Task<string>>();

            foreach (var url in urls)
            {
                downloads.Add(DownloadWebSiteContent(url));
            }

            var responses = await Task.WhenAll(downloads);

            var responsesString = string.Join(Environment.NewLine + new string('-', 100), responses);

            await File.WriteAllTextAsync(fileName, responsesString);
             
        }
    }
}