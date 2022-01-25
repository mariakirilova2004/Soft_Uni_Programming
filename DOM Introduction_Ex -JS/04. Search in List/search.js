function search() {
   let userInput = document.getElementById('searchText');
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let count = 0;
   for (const town of towns) {
      if(town.textContent.includes(userInput.value)){
         count++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      } else{
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }
 result.textContent = `${count} matches found`;
}
