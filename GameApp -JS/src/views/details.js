import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { del, getById } from '../api/gamesService.js';
import { commentsView } from './comments.js';
import { commentFormView } from './commentForm.js';

const detailsTemplate = (game, commentsSection, commentFormSection, onDelete) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">

    <div class="game-header">
        <img class="game-img" src="${game.imageUrl}" />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
    </div>

    <p class="text">
        ${game.summary}
    </p>

    ${commentsSection}

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${game.isOwner?html`<div class="buttons">
        <a href="/edit/${game._id}" class="button">Edit</a>
        <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
    </div>`:nothing}
</div>

<!-- Bonus -->
 ${commentFormSection}

</section>
`;

export async function detailsView(ctx){
    const gameId = ctx.params['id'];
    const [game, commentsSection] = await Promise.all([
        getById(gameId),
        commentsView(gameId)
    ]);
    
    if(ctx.user){
        const isOwner = (ctx.user._id == game._ownerId);
        game.isOwner = isOwner;
    }
    const commentFormSection = commentFormView(ctx, game.isOwner);
    ctx.render(detailsTemplate(game, commentsSection, commentFormSection, onDelete));
    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete ${game.title}?`);
        if(choice){
            await del(gameId);
            ctx.page.redirect('/');
        }
    }
}