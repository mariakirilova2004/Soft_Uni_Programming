import {html} from "../node_modules/lit-html/lit-html.js";

const catalogTemplate = () => html`
<section id="catalog">
            <div class="section-title">
                <form id="searchForm">
                    <input type="text" name="search" value="">
                    <input type="submit" value="Search">
                </form>
            </div>
            <header class="section-title">
                <!--?lit$257387813$-->
                Page
                <!--?lit$257387813$-->1 of
                <!--?lit$257387813$-->1
                <!--?lit$257387813$-->
                <!--?lit$257387813$-->
                <!--?-->
            </header>
            <!--?lit$257387813$-->
            <!---->
            <a class="card" href="/details/3987279d-0ad4-4afb-8ca9-5b256ae3b298">
                <article class="preview">
                    <div class="title">
                        <h2>
                            <!--?lit$257387813$-->Easy Lasagna
                        </h2>
                    </div>
                    <div class="small"><img src="/assets/lasagna.jpg"></div>
                </article>
            </a>
            <!---->
            <!---->
            <a class="card" href="/details/8f414b4f-ab39-4d36-bedb-2ad69da9c830">
                <article class="preview">
                    <div class="title">
                        <h2>
                            <!--?lit$257387813$-->Grilled Duck Fillet
                        </h2>
                    </div>
                    <div class="small"><img src="/assets/roast.jpg"></div>
                </article>
            </a>
            <!---->
            <!---->
            <a class="card" href="/details/985d9eab-ad2e-4622-a5c8-116261fb1fd2">
                <article class="preview">
                    <div class="title">
                        <h2>
                            <!--?lit$257387813$-->Roast Trout
                        </h2>
                    </div>
                    <div class="small"><img src="/assets/fish.jpg"></div>
                </article>
            </a>
            <!---->
            <footer class="section-title">
                <!--?lit$257387813$-->
                Page
                <!--?lit$257387813$-->1 of
                <!--?lit$257387813$-->1
                <!--?lit$257387813$-->
                <!--?lit$257387813$-->
                <!--?-->
            </footer>
        </section>
`

export function catalogPage(ctx){
    ctx.render(catalogTemplate());
}