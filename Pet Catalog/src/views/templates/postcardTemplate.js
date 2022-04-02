import {html, nothing} from '../../../node_modules/lit-html/lit-html.js';

export const postcardTemplate = (withDetails = true, postcard) => html`

                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="../../../${postcard.image}">
                    </article>
                    <h2 class="name">${postcard.name}</h2>
                    <h3 class="breed">${postcard.breed}</h3>
                    <div class="action">
                        <a href="/dashboard/${postcard._id}" class="btn">Details</a>
                    </div>
                </div>`;