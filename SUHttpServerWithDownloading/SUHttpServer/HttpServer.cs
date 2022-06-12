﻿using SUHttpServer.HTTP;
using SUHttpServer.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace SUHttpServer
{
    public class HttpServer
    {
        private readonly IPAddress iPAddress;
        private readonly int port;
        private readonly TcpListener serverListener;

        private readonly RoutingTable routingTable;

        public HttpServer(int port, Action<IRoutingTable> routingTable) :this("127.0.0.1", port, routingTable)
        {

        }

        public HttpServer(Action<IRoutingTable> routingTable) : this(8080, routingTable)
        {

        }

        public HttpServer(string _ipAddress, int _port, Action<IRoutingTable> routingTableConfiguration)
        {
            iPAddress = IPAddress.Parse(_ipAddress);
            port = _port;

            serverListener = new TcpListener(iPAddress, port);
            routingTableConfiguration(this.routingTable = new RoutingTable());
        }

        public async Task Start()
        {
            serverListener.Start();

            Console.WriteLine($"Server is listening on port {port}");
            Console.WriteLine($"Listening for requests");

            while (true)
            {
                var connection = await serverListener.AcceptTcpClientAsync();

                _ = Task.Run(async () =>
                {
                    var networkStream = connection.GetStream();
                    string strRequest = await ReadRequest(networkStream);
                    Request request = Request.Parse(strRequest);
                    Console.WriteLine(strRequest);
                    var response = this.routingTable.MatchRequest(request);
                    // Execute pre-render action for the response
                    if (response.PreRenderAction != null)
                        response.PreRenderAction(request, response);
                    await WriteResponse(networkStream, response);
                    connection.Close();
                });
            }
        }

        private async Task WriteResponse(NetworkStream networkStream, Response response)
        {
            var responseBytes = Encoding.UTF8.GetBytes(response.ToString());
            await networkStream.WriteAsync(responseBytes);
        }

        private async Task<string> ReadRequest(NetworkStream networkStream)
        {
            byte[] buffer = new byte[1024];
            StringBuilder request = new StringBuilder();
            int totalBytes = 0;

            do
            {
                var bytesRead = await networkStream.ReadAsync(buffer, totalBytes, buffer.Length);
                totalBytes += bytesRead;

                if(totalBytes > 10 * 1024)
                {
                    throw new InvalidOperationException("Request is too large");
                }

                request.Append(Encoding.UTF8.GetString(buffer, 0, bytesRead));

            } while (networkStream.DataAvailable);

            return request.ToString();
        }
    }
}
