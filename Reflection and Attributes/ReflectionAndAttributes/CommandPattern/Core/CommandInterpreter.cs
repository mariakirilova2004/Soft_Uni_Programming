using CommandPattern.Core.Commands;
using CommandPattern.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace CommandPattern.Core
{
    internal class CommandInterpreter : ICommandInterpreter
    {
        public string Read(string args)
        {
            string[] input = args.Split();

            string commandInfo = input[0] + "Command";
            string[] parameters = input.Skip(0).ToArray();

            Type type = Assembly
                .GetCallingAssembly()
                .GetTypes()
                .Where(t => t.Name == commandInfo)
                .FirstOrDefault();

            if(type == null)
            {
                throw new InvalidOperationException("Invlid Command!");
            }

            ICommand command = (ICommand)Activator.CreateInstance(type);

            string result = command.Execute(parameters);
            return result;
            //ICommand command = null;

            //if(commandInfo == nameof(HelloCommand))
            //{
            //    command = new HelloCommand();

            //}
            //else if (commandInfo == nameof(BeepCommand))
            //{
            //    command = new BeepCommand();

            //}
            //else if (commandInfo == nameof(ComplexCommand))
            //{
            //    command = new ComplexCommand();

            //}
            //else if (commandInfo == nameof(ExitCommand))
            //{
            //    command = new ExitCommand();

            //}
            //else
            //{
            //    throw new ArgumentException("Invalid Command!");
            //}
        }
    }
}
