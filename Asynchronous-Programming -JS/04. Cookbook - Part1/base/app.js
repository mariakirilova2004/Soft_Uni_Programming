setTimeout(() => {
    OnLoad()}
    , 2000);
function OnLoad(){
    let mainElement = document.querySelector('main');
    mainElement.innerHTML = '';
    url = `http://localhost:3030/jsonstore/cookbook/recipes`;
    fetch(url)
        .then(ans =>{
            return ans.json()
        })
        .then(an =>{
            for (const elementa in an) {
                if (Object.hasOwnProperty.call(an, elementa)) {
                    CreatePreview(an, elementa, mainElement)
                }
            }
        })
}

function CreatePreview(an, elementa, mainElement){
    const element = an[elementa];
    let articleElement = document.createElement('article');
    articleElement.classList.add('preview');
    let div1Element = document.createElement('div');
    div1Element.classList.add('title');
    let h2Element = document.createElement('h2');
    h2Element.textContent = element.name;
    div1Element.appendChild(h2Element);
    let div2Element = document.createElement('div');
    div2Element.classList.add('small');
    let imgElement = document.createElement('img');
    imgElement.src = element.img;
    div1Element.appendChild(h2Element);
    div2Element.appendChild(imgElement);
    articleElement.appendChild(div1Element);
    articleElement.appendChild(div2Element);
    articleElement.addEventListener('click', (e) =>{
        CreateFullPreview(element, articleElement)
    });
    mainElement.appendChild(articleElement);
}

function CreateFullPreview(element, articleElement){
    let url = `http://localhost:3030/jsonstore/cookbook/details/${element._id}`;
    fetch(url)
        .then(ans => {return ans.json()})
        .then(an => {
            articleElement.innerHTML = `<h2>${an.name}</h2>
           <div class="band">
               <div class="thumb">
                   <img src="${an.img}">
               </div>
               <div class="ingredients">
                   <h3>Ingredients:</h3>`;
            let ul = '<ul>';
            an['ingredients'].forEach(element => {
                ul += `<li>${element}</li>`;
            });
            ul += '</ul> </div></div>';
            articleElement.innerHTML += ul;
            articleElement.innerHTML += '<div class="description"> <h3>Preparation:</h3>';
            ul = '';
            an['steps'].forEach(element => {
                ul += `<p>${element}</p>`;
            });
            ul += `</div>`;
            articleElement.innerHTML += ul;
        })
}

/*
<article>
            <h2>Title</h2>
            <div class="band">
                <div class="thumb">
                    <img src="assets/lasagna.jpg">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                    reprehenderit pariatur aut dolor exercitationem impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                    corrupti? Quam.</p>
            </div>
        </article>
*/