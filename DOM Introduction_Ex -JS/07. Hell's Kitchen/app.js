function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      function sortObject(obj) {
         return Object.keys(obj)
           .sort().reduce((a, v) => {
           a[v] = obj[v];
           return a; }, {});
       }
      let textArea = JSON.parse(document.querySelector('#inputs textarea').value);
      let bigname = '';
      let biggestavg = 0;
      let biggestsal = ['lala', 0];
      let bigworkers;
      let restaurants = [];
      for (const restaurant of textArea) {
         let arr = Array.from(restaurant.split(' - '));
         let flag = false;
         let el;
         let salary = 0;
         let bigsalary = ["lala", 0];
         let Name = arr[0];
         let Workers = arr[1];
         for (const key in restaurants) {
            if(restaurants[key].Name == Name) {
               el = restaurants[key];
               flag = true;
               break;
            }
         }
         if(flag){
            Name = el.Name;
            Workers = arr[1];
            Workers = Array.from(Workers.split(', '));
            for (const r of Workers) {
               el.Workers.push(r);
            }
            salary = 0;
            bigsalary = ["lala", 0];
            for (const worker of el.Workers) {
               let work = Array.from(worker.split(' '));
               salary += Number(work[1]);
               if(Number(work[1]) > bigsalary[1]){
                  bigsalary[1] = Number(work[1]);
                  bigsalary[0] = work[0];
               }
            }
            salary /= el.Workers.length;
            if(biggestavg < salary){
               bigname = el.Name;
               biggestavg = salary;
               biggestsal[0] = bigsalary[0];
               biggestsal[1] = bigsalary[1];
               bigworkers = el.Workers;
            }
         } else{
            Name = arr[0];
            Workers = arr[1];
            Workers = Array.from(Workers.split(', '));
            salary = 0;
            bigsalary = ["lala", 0];
            for (const worker of Workers) {
            let work = Array.from(worker.split(' '));
            salary += Number(work[1]);
            if(Number(work[1]) > bigsalary[1]){
               bigsalary[1] = Number(work[1]);
               bigsalary[0] = work[0];
            }
         }
         let Res = {
            Name: Name,
            Workers: Workers
         };
         restaurants.push(Res);
         salary /= Workers.length;
         if(biggestavg < salary){
            bigname = Name;
            biggestavg = salary;
            biggestsal[0] = bigsalary[0];
            biggestsal[1] = bigsalary[1];
            bigworkers = Workers;
         }
         }
      }
      let out1 = document.querySelector('#bestRestaurant p');
      out1.textContent = `Name: ${bigname} Average Salary: ${biggestavg.toFixed(2)} Best Salary: ${biggestsal[1].toFixed(2)}`;
      let rez = '';
      let WORKERS = [];
      for (const worker of bigworkers) {
         let work = Array.from(worker.split(' '));
         let r = {
            Name: work[0],
            Salary: work[1]
         }
         WORKERS.push(r);
      };
      WORKERS = WORKERS.sort((a, b) => b.Salary - a.Salary);
      for (const worker of WORKERS) {
            rez += `Name: ${worker.Name} With Salary: ${worker.Salary} `;
      };
      let out2 = document.querySelector('#workers p');
      out2.textContent = rez;
   }
}