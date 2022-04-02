import * as dashboardService from '../services/dashboardService.js';
import {html} from '../../node_modules/lit-html/lit-html.js';
import { postcardIsInvalid } from '../utils/validators.js';


const editTemplate = (album, submitHandler) => html`
<section id="editPage">
            <form @submit=${submitHandler} class="editForm">
                <img src="/images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${album.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${album.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${album.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${album.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value="${album.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
</section>
<section class="editPage">
<form @submit=${submitHandler} method = "POST">
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" value=${album.name} name="name" class="name" type="text">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" value=${album.imgUrl} name="imgUrl" class="imgUrl" type="text">

            <label for="price" class="vhide">Price</label>
            <input id="price" value=${album.price} name="price" class="price" type="text">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" value=${album.releaseDate} name="releaseDate" class="releaseDate" type="text">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" value=${album.artist} name="artist" class="artist" type="text">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" value=${album.genre} name="genre" class="genre" type="text">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10"cols="10">${album.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>
`;


   
   export const editView = (ctx) =>{
    dashboardService.getOne(ctx.params.postcardId)
    .then(postcard =>{
        ctx.render(editTemplate(postcard, submitHandler));
    });
       const submitHandler = (e) =>{
           e.preventDefault();
           const postcardData = Object.fromEntries(new FormData(e.currentTarget));
            if (postcardIsInvalid(postcardData)){
                alert('All fields should be filled');
                return;
            };
            dashboardService.edit(ctx.params.postcardId, {
                name: postcardData.name,
                breed: postcardData.breed,
                age: postcardData.age,
                weight: postcardData.weight,
                image: postcardData.image
              })
            .then((postcard) => ctx.page.redirect(`/dashboard/${ctx.params.postcardId}`))
            .catch((error) =>
                window.alert(error)
            );
       }
}