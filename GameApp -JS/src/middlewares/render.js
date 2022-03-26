import { render, html } from "../../node_modules/lit-html/lit-html.js";
const root = document.getElementById('main-content');
const header = document.getElementById('myheader');

const navTemplate = (user) => html`
<!-- Navigation -->
<h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${user?html`               
                 <!-- Logged-in users -->
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>`:html`                
                <!-- Guest users -->
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
            </nav>
`;

function ctxRender(content){
    render(content, root);
}

export function addRender(ctx, next){
    render(navTemplate(ctx.user), header)
    ctx.render = ctxRender;
    next();
}