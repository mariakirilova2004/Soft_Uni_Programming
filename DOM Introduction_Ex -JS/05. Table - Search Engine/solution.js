function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let input = document.getElementById('searchField');
      let rows = document.querySelectorAll('tbody tr');
      for (const tr of rows) {
         let cols = tr.querySelectorAll('td');
         let flag = false;
         for (const col of cols) {
            if (col.textContent.includes(input.value)){
               flag = true;
               break;
            } 
         }
         if (flag){
            tr.className = 'select';
         } else{
            tr.className = '';
         }
      }
   }
}