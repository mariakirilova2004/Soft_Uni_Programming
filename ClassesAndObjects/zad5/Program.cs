using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad5
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            List<Team> teams = new List<Team>();
            string input = "";
            while(input != "end of assignment")
            {
                input = Console.ReadLine();
                if (input.Contains("->"))
                {
                    string[] inputarr = input.Split('-').ToArray();
                    inputarr[1] = inputarr[1].Remove(0, 1);
                    int br = 0;
                    int br1 = 0;
                    foreach (var item in teams)
                    {
                        if (item.Name == inputarr[1]) { br++; break; }
                    }
                    for (int i = 0; i < teams.Count; i++)
                    {
                        if(teams[i].Members.Contains(inputarr[0]))
                        {
                            br1++;
                            break;
                        }
                    }
                    for (int i = 0; i < teams.Count; i++)
                    {
                        if (teams[i].Leader == inputarr[0])
                        {
                            br1++;
                            break;
                        }
                    }
                    if (br == 0)
                    {
                        Console.WriteLine($"Team {inputarr[1]} does not exist!");
                    }
                    if (br1 != 0)
                    {
                        Console.WriteLine($"Member {inputarr[0]} cannot join team {inputarr[1]}!");
                    }
                    if (br != 0 && br1 == 0)
                    {
                        foreach (var item in teams)
                        {
                            if (item.Name == inputarr[1])
                            {
                                item.Members.Add(inputarr[0]);
                            }
                        }
                    }
                }
                else if(input.Contains("-"))
                {
                    string[] inputarr = input.Split('-').ToArray();
                    inputarr[1].Remove(0);
                    int br = 0;
                    int br1 = 0;
                    foreach (var item in teams)
                    {
                        if (item.Name == inputarr[1]) { br++; break; }
                    }
                    foreach (var item in teams)
                    {
                        if (item.Leader == inputarr[0]) { br1++; break; }
                    }
                    if (br != 0)
                    {
                        Console.WriteLine($"Team {inputarr[1]} was already created!");
                    }
                    if (br1 != 0)
                    {
                        Console.WriteLine($"{inputarr[0]} cannot create another team!");
                    }
                    if (br == 0 && br1 == 0)
                    {
                        Team exe = new Team(inputarr[0], inputarr[1]);
                        teams.Add(exe);
                        Console.WriteLine($"Team {inputarr[1]} has been created by {inputarr[0]}!");
                    }
                }
            }
            teams = teams.OrderByDescending(t => t.Name).ToList();
            foreach (var item in teams)
            {
                if(item.Members.Count != 0)
                {
                    Console.WriteLine(item.Name);
                    Console.WriteLine("- " + item.Leader);
                    foreach (var mem in item.Members)
                    {
                        Console.WriteLine("-- " + mem);
                    }
                }
            }
            Console.WriteLine("Teams to disband:");
            foreach (var item in teams)
            {
                if (item.Members.Count == 0)
                {
                    Console.WriteLine(item.Name);
                }
            }
            Console.ReadKey();
        }
    }
}
