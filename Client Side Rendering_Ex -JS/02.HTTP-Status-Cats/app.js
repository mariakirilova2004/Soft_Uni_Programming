import {render, html} from '../node_modules/lit-html/lit-html.js'
import {styleMap} from '../node_modules/lit-html/directives/style-map.js'
import {cats} from './catSeeder.js';


const root = document.getElementById('allCats');
root.addEventListener('click', toggle);


const GetTemplate = (cats) => html`
    <ul>
        ${cats.map(cat => html`<li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                <div class="status" style=${styleMap(cat.info ? {display: 'block'} : {display: 'none'})} id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
            </li>`
        )}
    </ul>`;


cats.forEach(c => c.info = false);
update();

function update(){
    const rez = GetTemplate(cats);
    render(rez, root);
}

function toggle(event){
    const elementId = event.target.parentNode.querySelector('.status');
    const cat = cats.find(c => c.id == elementId.id);
    cat.info = !cat.info;
    update();
    console.log(elementId);
}
