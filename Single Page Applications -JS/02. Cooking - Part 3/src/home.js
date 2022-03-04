const url = 'http://localhost:3030/data/recipes'
const homeSection = document.querySelector('.home');
const list = homeSection.querySelector('div');
export function home(){
    fetch(url)
        .then(res => res.json())
        .then(recipes =>{
            renderRecipes(recipes)
            homeSection.style.display = 'block';
         })
}

function renderRecipes(recipes){
    const fragment = document.createDocumentFragment();
    recipes.forEach(element => {
        fragment.appendChild(renderRecipe(element));
    });

    list.innerHTML = '';

    list.appendChild(fragment);
}

function renderRecipe(recipe){
    const recipeElement = document.createElement('article')
    recipeElement.classList.add('preview');
    recipeElement.innerHTML = `
    <div class = "title">
        <h2>${recipe.name}</h2>
    </div>
    <div class = "small">
        <img src="${recipe.img}">
    </div>`;

    return recipeElement;
}


