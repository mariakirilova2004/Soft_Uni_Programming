import page from "../node_modules/page/page.mjs";
import {decorateContext} from "../src/middlewares/render.js"
import {homePage} from '../views/home.js';
import {catalogPage} from '../views/catalog.js';
import {loginPage} from '../views/login.js';
import {registerPage} from '../views/register.js';
import {detailsPage} from '../views/details.js';
import {createPage} from '../views/create.js';
import {editPage} from '../views/edit.js';
import * as api from '../src/api/recipe.js';

page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details', detailsPage);
page('/create', createPage);
page('/edit', editPage);

page.start();

window.api = api;
