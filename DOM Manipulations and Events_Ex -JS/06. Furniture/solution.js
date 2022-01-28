function solve() {
  let tbodyElement = document.getElementsByTagName('tbody')[0];
  let generateButton = document.getElementsByTagName('button')[0];
  let buyButton = document.getElementsByTagName('button')[1];
  let generateTextArea = document.getElementsByTagName('textarea')[0];
  let buyTextArea = document.getElementsByTagName('textarea')[1];
  generateButton.addEventListener('click', () => {
    let products = JSON.parse(generateTextArea.value);
    for (const product of products) {
      let row = document.createElement('tr');

      let colElement = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = product['img'];
      colElement.appendChild(imgElement);
      row.appendChild(colElement);

      colElement = document.createElement('td');
      let pElement = document.createElement('p');
      pElement.textContent = product['name'];
      colElement.appendChild(pElement);
      row.appendChild(colElement);

      colElement = document.createElement('td');
      pElement = document.createElement('p');
      pElement.textContent = product['price'];
      colElement.appendChild(pElement);
      row.appendChild(colElement);

      colElement = document.createElement('td');
      pElement = document.createElement('p');
      pElement.textContent = product['decFactor'];
      colElement.appendChild(pElement);
      row.appendChild(colElement);

      colElement = document.createElement('td');
      let markElement = document.createElement('input');
      markElement.type = 'checkbox';
      colElement.appendChild(markElement);
      row.appendChild(colElement);
      tbodyElement.appendChild(row);
    }
  });
  buyButton.addEventListener('click', () => {
    let rez = '';
    let listOfFurniture = Array.from(document.querySelectorAll('tbody tr'));
    let listOfCheckedFurniture = [];
    for (const furniture of listOfFurniture) {
      let inputElement = furniture.querySelector('td input[type="checkbox"]');
      if(inputElement.checked){
        listOfCheckedFurniture.push(furniture);
      }
    }
    let listOfNamesOfCheckedFurniture = []; 
    listOfCheckedFurniture.forEach(x => {
      let name = x.querySelector('tr td p:nth-child(1)').textContent;
      listOfNamesOfCheckedFurniture.push(name);
    });
    rez += `Bought furniture: ${listOfNamesOfCheckedFurniture.join(', ')}\n`;
    let priceRez = 0; 
    for (const furniture of listOfCheckedFurniture) {
      let price = furniture.querySelector('tr td:nth-child(3) p').textContent;
      priceRez += Number(price);
    }
    rez += `Total price: ${priceRez.toFixed(2)}\n`;
    let avgDecorationFactor = 0; 
    listOfCheckedFurniture.forEach(x => {
      let decoration = x.querySelector('tr td:nth-child(4) p').textContent;
      avgDecorationFactor += Number(decoration);
    });
    avgDecorationFactor /= listOfCheckedFurniture.length;
    rez += `Average decoration factor: ${avgDecorationFactor}`;
    buyTextArea.value = rez;
  });
}