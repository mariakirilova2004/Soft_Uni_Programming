using SimpleSnake.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace SimpleSnake.GameObjects
{
    public class Engine
    {
        private Direction direction;
        private Dictionary<Direction, Point> pointDirections;
        private Snake snake;
        private int speed;

        public Engine(Snake snake)
        {
            this.snake = snake;
            this.direction = Direction.Right;
            this.pointDirections = new Dictionary<Direction, Point>()
            {
                {Direction.Left, new Point(-1, 0) },
                {Direction.Right, new Point(1, 0) },
                {Direction.Up, new Point(0, -1) },
                {Direction.Down, new Point(0, 1) }
            };
            speed = 200;
        }
        public void Run()
        {
            while(true)
            {
                if(Console.KeyAvailable)
                {
                    this.GetDirection();
                }
                bool tryMove = this.snake.TryMove(this.pointDirections[this.direction]);
                if(!tryMove)
                {
                    Console.WriteLine("Bye, bye");
                }
                speed -= 1;
                Thread.Sleep(speed);
            }
        }

        private void GetDirection()
        {
            ConsoleKeyInfo consoleKeyInfo = Console.ReadKey();
            if (consoleKeyInfo.Key == ConsoleKey.RightArrow)
            {
                if (direction != Direction.Right)
                {
                    direction = Direction.Right;
                }
            }
            else if (consoleKeyInfo.Key == ConsoleKey.LeftArrow)
            {
                if (direction != Direction.Right)
                {
                    direction = Direction.Left;
                }
            }
            else if (consoleKeyInfo.Key == ConsoleKey.UpArrow)
            {
                if (direction != Direction.Down)
                {
                    direction = Direction.Up;
                }
            }
            else if (consoleKeyInfo.Key == ConsoleKey.DownArrow)
            {
                if (direction != Direction.Up)
                {
                    direction = Direction.Down;
                }
            }
        }
    }
}
