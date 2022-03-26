import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as commentsServise from '../api/commentsServise.js';
import { createSubmitHandler } from '../utils.js';

const formTemplate = (onSubmit) => html`
<!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>
`;

export function commentFormView(ctx, isOwner){
    if(ctx.user && !isOwner){
        return formTemplate(createSubmitHandler(ctx, onSubmit));
    } else{
        return nothing;
    }
}

async function onSubmit(ctx, data, event){
    const gameId = ctx.params.id;
    await commentsServise.postComment({
        gameId,
        "comment": data.comment
    });
    event.target.reset();
    ctx.page.redirect(`/details/${gameId}`);
}