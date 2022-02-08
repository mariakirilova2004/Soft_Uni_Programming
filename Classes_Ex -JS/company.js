class Company{
    constructor(){
        this.departments = {};
    };

    addEmployee(name, salary, position, department){
        if(name == undefined || name == null || name == '') throw new Error("Invalid input!");
        if(salary == undefined || salary == null || salary == '' || salary < 0) throw new Error("Invalid input!");
        if(position == undefined || position == null || position == '') throw new Error("Invalid input!");
        if(department == undefined || department == null || department == '') throw new Error("Invalid input!");
        if(this.departments[department] == undefined){
            this.departments[department] = []
        } 
        this.departments[department].push({name, salary: Number(salary), position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment(){
        let bestRef = {};
        let bestSalary = 0;
        let bestKey = 0;
        for (const key in this.departments) {
            if (Object.hasOwnProperty.call(this.departments, key)) {
                let salary = 0;
                const dep = this.departments[key];
                dep.forEach(employee => {
                    salary += Number(employee.salary);
                });
                salary /= dep.length;
                if (bestSalary < salary){
                    bestSalary = salary;
                    bestRef = dep;
                    bestKey = key;
                }
            }
        }
        bestRef.sort((a, b) => {
            return b.salary - a.salary;
        }).sort((a, b) => {
            if(a.salary == b.salary) return a.name.localeCompare(b.name);
        });
        let str = `Best Department is: ${bestKey}\nAverage salary: ${bestSalary.toFixed(2)}`;
        bestRef.forEach(employee => {
            str += `\n${employee.name} ${employee.salary} ${employee.position}`
        });
        return str;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
