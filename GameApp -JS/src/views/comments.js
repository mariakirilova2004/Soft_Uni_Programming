import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as commentsServise from '../api/commentsServise.js';
import { createSubmitHandler } from '../utils.js';


function commentPreview(comments){
    return html`<ul>
            ${comments.map(x => html`
                <li class="comment">
                <p>Content: ${x.comment}</p>
                </li>
            `)}
        </ul>`
};

const commentsTemplate = (comments) =>html`
<!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
        <h2>Comments:</h2>
        
        ${comments.length==0?html`<p class="no-comment">No comments.</p>`:commentPreview(comments)}
    </div>
`;

export async function commentsView(gameId){
    const comments = await commentsServise.getByGameId(gameId);
    return commentsTemplate(comments);
}