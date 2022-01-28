function create(words) {
   let contentElement = document.getElementById('content');
   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newEPlement = document.createElement('p');
      newEPlement.textContent = word;
      newEPlement.style.display = 'none';
      newDivElement.appendChild(newEPlement);
      newDivElement.addEventListener('click', (e) => e.currentTarget.childNodes[0].style.display = 'block');
      contentElement.appendChild(newDivElement);
   }
}