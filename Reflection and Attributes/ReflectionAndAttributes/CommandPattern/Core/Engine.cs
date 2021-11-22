using CommandPattern.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace CommandPattern.Core
{
    internal class Engine : IEngine
    {
        private readonly ICommandInterpreter commandInterpreter = new CommandInterpreter();

        public Engine(ICommandInterpreter ci)
        {
            commandInterpreter = ci;
        }
        public void Run()
        {
            try
            {
                while (true)
                {
                    string input = Console.ReadLine();
                    string result = this.commandInterpreter.Read(input);
                    Console.WriteLine(result);
                }
            }
            catch(ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
