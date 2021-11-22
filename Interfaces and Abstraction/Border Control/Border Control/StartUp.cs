using System;
using System.Collections.Generic;
using System.Linq;

namespace Border_Control
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<IRobot> robots = new List<IRobot>();
            List<string> ids = new List<string>();
            while(true)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                if (input[0] == "End") break;
                if (input.Length == 2)
                {
                    robots.Add(new Robot(input[0], input[1]));
                }
                else
                {
                    robots.Add(new Human(input[0], int.Parse(input[1]), input[2]));
                }
            }
            string id = Console.ReadLine();
            foreach (var robot in robots)
            {
                if(robot.Id[robot.Id.Length - 3] == id[0] && robot.Id[robot.Id.Length - 2] == id[1] && robot.Id[robot.Id.Length - 1] == id[2])
                {
                    Console.WriteLine(robot.Id);
                }
            }
        }
    }
}
