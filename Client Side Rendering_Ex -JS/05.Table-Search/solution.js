import {render, html} from '../node_modules/lit-html/lit-html.js'
const tbodyElement = document.querySelector('tbody');
const urlGET = 'http://localhost:3030/jsonstore/advanced/table';

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const textInput = document.querySelector('input');
      const trElements = document.querySelectorAll('tr');
      if (textInput.value != ''){
         trElements.forEach(tr => {
            tr.classList.remove("select");
            console.log('removed');
         });
         let Elements = [];
         trElements.forEach(tr => {
            if(tr.innerHTML.includes(textInput.value)) Elements.push(tr);
         });
         Elements.map(el => el.classList.add("select"));
      }
      textInput.value = '';
   }

//UPDATE
const GetTemplate = (data) => html`
<tr>
   <td>${data[0]}${data[1]}</td>
   <td>${data[2]}</td>
   <td>${data[3]}</td>
</tr>
`

const GenerateTemplate = (people) => html`
   ${people.map(person => GetTemplate(Object.values(person)))}
`;

update();
function update(){
   fetch(urlGET)
      .then(re => re.json())
      .then(ans => {
         let res = GenerateTemplate(Object.values(ans));
         render(res, tbodyElement)
      }) 
}
}

solve();

