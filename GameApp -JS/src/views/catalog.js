import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/gamesService.js';

const gamePreview = (game) =>{
    return html`
        <div class="allGames">
                <div class="allGames-info">
                    <img src="../..${game.imageUrl}">
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>

            </div>
    `
}

const catalogTemplate = (games) => html`
<section id="catalog-page">
            <h1>All Games</h1>
            ${games.map(x => gamePreview(x))}
            ${games.length==0?html`<h3 class="no-articles">No articles yet</h3>`:nothing} 
        </section>
`;

export async function catalogView(ctx){
    const games = await gamesService.getAll()
                    .catch(x => alert(x.message));
    ctx.render(catalogTemplate(games));
}