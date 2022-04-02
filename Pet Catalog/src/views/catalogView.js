import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { postcardTemplate } from './templates/postcardTemplate.js';
import * as dashboardService from '../services/dashboardService.js';

const catalogTemplate = (user, postcards) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${postcards.length == 0?html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`:
                postcards.map(postcard => postcardTemplate(Boolean(user), postcard))}
    </div>
</section>`;

export const catalogView = (ctx) =>{
    dashboardService.getAll()
        .then((postcards) =>{
            //postcards = [];
            ctx.render(catalogTemplate(ctx.user, postcards));
        });
}

