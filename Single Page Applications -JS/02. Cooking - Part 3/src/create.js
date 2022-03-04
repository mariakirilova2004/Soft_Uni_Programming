import { getToken } from "./auth.js";

const createSection = document.querySelector('.create');
const createForm = createSection.querySelector('form');

createForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');

    let data = {
        name,
        img,
        ingredients,
        steps
    }

    let accessToken = getToken();

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(user =>{
            console.log(user);
        })
});
export function create(){
    createSection.style.display = 'block';
}