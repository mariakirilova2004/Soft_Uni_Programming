window.addEventListener('load', solve);

function solve() {
    let buttonAddElement = document.getElementById('add');
    buttonAddElement.addEventListener('click', (e) =>{
        e.preventDefault();
        let modelElement = document.getElementById('model');
        let yearElement = document.getElementById('year');
        let descriptionElement = document.getElementById('description');
        let priceElement = document.getElementById('price');
        let furnitureListelement = document.getElementById('furniture-list');
        if (modelElement.value != '' && yearElement.value > 0 && descriptionElement.value != '' && priceElement.value > 0){
            let trFirstElement = document.createElement('tr');
            trFirstElement.classList.add('info');
            let tdNameElement = document.createElement('td');
            tdNameElement.textContent = modelElement.value;
            let tdPriceElement = document.createElement('td');
            tdPriceElement.textContent = Number(priceElement.value).toFixed(2);
            let tdbuttonsElement = document.createElement('td');
            let tdbuttonFirstElement = document.createElement('button');
            tdbuttonFirstElement.classList.add('moreBtn');
            tdbuttonFirstElement.textContent = 'More Info';
            let tdbuttonSecondElement = document.createElement('button');
            tdbuttonSecondElement.classList.add('buyBtn');
            tdbuttonSecondElement.textContent = 'Buy it';
            tdbuttonsElement.appendChild(tdbuttonFirstElement);
            tdbuttonsElement.appendChild(tdbuttonSecondElement);
            trFirstElement.appendChild(tdNameElement);
            trFirstElement.appendChild(tdPriceElement);
            trFirstElement.appendChild(tdbuttonsElement);

            let trSecondElement = document.createElement('tr');
            trSecondElement.classList.add('hide');
            let tdYearElement = document.createElement('td');
            tdYearElement.textContent = 'Year: ' + yearElement.value;
            let tdDescriptionElement = document.createElement('td');
            tdDescriptionElement.colSpan = 3;
            tdDescriptionElement.textContent = 'Description: ' + descriptionElement.value;
            trSecondElement.appendChild(tdYearElement);
            trSecondElement.appendChild(tdDescriptionElement);

            tdbuttonFirstElement.addEventListener('click', (e) =>{
                e.preventDefault();
                if(tdbuttonFirstElement.textContent == 'More Info'){
                    tdbuttonFirstElement.textContent = 'Less Info';
                    trSecondElement.style.display = 'contents';
                } else{
                    tdbuttonFirstElement.textContent = 'More info';
                    trSecondElement.style.display = 'none';
                }
            });

            tdbuttonSecondElement.addEventListener('click', (e) =>{
                let pricetdElement = document.querySelector('td[class="total-price"]');
                pricetdElement.textContent = Number(Number(pricetdElement.textContent) + Number(tdPriceElement.textContent)).toFixed(2);
                e.currentTarget.parentNode.parentNode.remove();
            });

            furnitureListelement.appendChild(trFirstElement);
            furnitureListelement.appendChild(trSecondElement);
            modelElement.value = '';
            yearElement.value = '';
            descriptionElement.value = '';
            priceElement.value = '';
        }
    });
}
