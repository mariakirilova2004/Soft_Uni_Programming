using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimpleSnake.GameObjects
{
    public class Snake
    {
        private const char SnakeSymbol = '\u25CF';
        private Queue<Point> snakeElements;
        private readonly Food[] foods;
        private int foodIndex = 0;
        private readonly Wall wall;

        public Snake(Wall wall)
        {
            this.wall = wall;
            this.foods = new Food[3]
            {
                new FoodAsterisk(this.wall),
                new FoodDollar(this.wall),
                new FoodHash(this.wall)
            };
            this.CreateSnake();
        }
       
        private void CreateSnake()
        {
            this.snakeElements = new Queue<Point>();
            for (int i = 1; i <= 6; i++)
            {
                Point point = new Point(i, 1);
                snakeElements.Enqueue(point);
                point.Draw(SnakeSymbol);
            }

            this.foodIndex = GetRandomIndex();
            this.foods[this.foodIndex]
                .SetRandomPositions(this.snakeElements);
        }

        private int GetRandomIndex() => new Random().Next(0, this.foods.Length);

        public bool TryMove(Point point)
        {
            Point snakeHead = this.snakeElements.Last();
            int nextLeftX = snakeHead.LeftX + point.LeftX;
            int nextTopY = snakeHead.TopY + point.TopY;

            bool IsSnake = this.snakeElements.Any(x => x.LeftX == nextLeftX && x.TopY == nextTopY);
            if (IsSnake)
            {
                return false;
            }

            bool IsWall = nextLeftX < 0 || nextTopY < 0 || nextLeftX >= this.wall.LeftX || nextTopY >= this.wall.TopY;
            if(IsWall)
            {
                return false;
            }

            bool IsFood = this.foods[foodIndex].LeftX == nextLeftX && this.foods[foodIndex].TopY == nextTopY;

            if(IsFood)
            {
                this.Eat(nextLeftX, nextTopY);
            }
            Point snakPoint = new Point(nextLeftX, nextTopY);
            this.snakeElements.Enqueue(snakPoint);
            snakPoint.Draw(SnakeSymbol);

            Point lastPoint = this.snakeElements.Dequeue();
            lastPoint.Draw(' ');
            return true;
        }

        private void Eat(int nextLeftX, int nextTopY)
        {
            Food food = this.foods[foodIndex];
            for (int i = 0; i < food.Points; i++)
            {
                this.snakeElements.Enqueue(new Point(nextLeftX, nextTopY));
            }

            this.foodIndex = GetRandomIndex();
            this.foods[this.foodIndex]
                .SetRandomPositions(this.snakeElements);
        }
    }
}
