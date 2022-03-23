import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { albumTemplate } from './templates/albumTemplate.js';
import * as albumService from '../services/albumService.js';

const catalogTemplate = (user, albums) => html`
<section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.map(album => albumTemplate(Boolean(user), album))} 
            ${albums.length == 0?html`<p>No Albums in Catalog!</p>`:nothing}
            </section>
`;

export const catalogView = (ctx) =>{
    albumService.getAll()
        .then((albums) =>{
            ctx.render(catalogTemplate(ctx.user, albums));
        });
}

