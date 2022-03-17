import {html, render} from '../node_modules/lit-html/lit-html.js';


let buttonElement = document.getElementById('btnLoadTowns');
buttonElement.addEventListener('click', GetTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(el => html`<li>${el}</li>`)}
</ul>
`;
    
function GetTowns(e){
    e.preventDefault();
    const rootElement = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');
    if(towns[0] != ''){
        let rez = listTemplate(towns)
        render( rez, rootElement);
        towns.value = '';
    }
}