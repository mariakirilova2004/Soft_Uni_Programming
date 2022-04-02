import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { donationView } from './donationView.js';
import * as donationService from '../services/donationService.js';
import * as dashboardService from '../services/dashboardService.js';


const detailsTemplate = (postcard, user, countOfDonations, liked, ctx) => html`
<section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${postcard.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${postcard.name}</h1>
                        <h3>Breed: ${postcard.breed}</h3>
                        <h4>Age: ${postcard.age}</h4>
                        <h4>Weight: ${postcard.weight}</h4>
                        <h4 class="donation">Donation: ${100 * countOfDonations}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        ${user != undefined && user._id == postcard._ownerId? html`<div class="actionBtn">
                        <a href="/dashboard/${postcard._id}/edit" class="edit">Edit</a>
                        <a href="/dashboard/${postcard._id}/delete" class="remove">Delete</a>
                        </div>`:nothing}
                        <!--(Bonus Part) Only for no creator and user-->
                        ${user != undefined && user._id != postcard._ownerId && liked == 0? donationView(postcard, ctx):nothing}
                        
                    </div>
                </div>
            </div>
</section>`;


export const detailsView = (ctx) =>{
    dashboardService.getOne(ctx.params.postcardId)
        .then(postcard =>{
            donationService.countForAPet(postcard)
                                    .then(res => { 
                                        donationService.isItLiked(postcard, ctx.user).then(res2 => ctx.render(detailsTemplate(postcard, ctx.user, res, res2, ctx)));
                                    });
            
        });
};