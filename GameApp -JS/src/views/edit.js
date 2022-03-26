import {html} from '../../node_modules/lit-html/lit-html.js';
import { getById, update } from '../api/gamesService.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="${game.title}">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="${game.category}">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${game.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;

export async function editView(ctx){
    const gameId = ctx.params.id;
    const game = await getById(gameId);
    ctx.gameid = gameId;
    ctx.render(editTemplate(game, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event){
    if(Object.values(data).some(x => x=="")){
        return alert("All fields must be filled!");
    } else{
        await update(ctx.gameid, {
            title: data.title,
            category: data.category,
            maxLevel: data.maxLevel,
            imageUrl: data.imageUrl,
            summary: data.summary
        });
        event.target.reset();
        ctx.page.redirect('/details/'+ ctx.gameid);
    }
}