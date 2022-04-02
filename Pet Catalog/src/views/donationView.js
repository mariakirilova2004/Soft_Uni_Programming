import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { postcardTemplate } from './templates/postcardTemplate.js';
import * as donationService from '../services/donationService.js';


const donationTemplate = (clickHandler) => html`
    <a href="#" class="donate" @click=${clickHandler}>Donate</a>
`;

export const donationView = (postcard, ctx) =>{
    const clickHandler = (e) =>{
        e.preventDefault();
        donationService.donate(postcard._id);
        ctx.page.redirect(`/dashboard/${postcard._id}`);
    };
    return donationTemplate(clickHandler);
}