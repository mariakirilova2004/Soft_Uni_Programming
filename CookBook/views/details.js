import {html} from "../node_modules/lit-html/lit-html.js";

const detailsTemplate = () => html`
<section id="details">
<article>
    <h2>
        <!--?lit$257387813$-->Easy Lasagna
    </h2>
    <div class="band">
        <div class="thumb"><img src="/assets/lasagna.jpg"></div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                <!--?lit$257387813$-->
                <!---->
                <li>
                    <!--?lit$257387813$-->1 tbsp Ingredient 1
                </li>
                <!---->
                <!---->
                <li>
                    <!--?lit$257387813$-->2 cups Ingredient 2
                </li>
                <!---->
                <!---->
                <li>
                    <!--?lit$257387813$-->500 g Ingredient 3
                </li>
                <!---->
                <!---->
                <li>
                    <!--?lit$257387813$-->25 g Ingredient 4
                </li>
                <!---->
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        <!--?lit$257387813$-->
        <!---->
        <p>
            <!--?lit$257387813$-->Prepare ingredients
        </p>
        <!---->
        <!---->
        <p>
            <!--?lit$257387813$-->Mix ingredients
        </p>
        <!---->
        <!---->
        <p>
            <!--?lit$257387813$-->Cook until done
        </p>
        <!---->
    </div>
    <!--?lit$257387813$-->
    <div class="controls">
        <a class="actionLink" href="/edit/3987279d-0ad4-4afb-8ca9-5b256ae3b298">✎ Edit</a>
        <a class="actionLink" href="javascript:void(0)">✖ Delete</a>
    </div>
</article>

<div><!---->
    <div class="section-title">
        Comments for <!--?lit$6262580635$-->Grilled Duck Fillet
    </div>
    <!--?lit$6262580635$-->
    <article class="new-comment">
        <!--?lit$6262580635$-->
        <h2>New comment</h2>
        <form id="commentForm">
            <textarea name="content" placeholder="Type comment"></textarea>
            <input type="submit" value="Add comment">
        </form>
    </article>
    <div class="comments">
        <!--?lit$6262580635$-->
    <ul>
        <!--?lit$6262580635$--><!---->
    <li class="comment">
        <header><!--?lit$6262580635$-->peter@abv.bg</header>
        <p><!--?lit$6262580635$-->Great recipe!</p>
    </li><!---->
    </ul>
    </div></div>
</section>
`

export function detailsPage(ctx){
    ctx.render(detailsTemplate());
}