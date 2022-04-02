import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddlewears.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', catalogView);
page('/create', createView);
page('/dashboard/:postcardId', detailsView);
page('/dashboard/:postcardId/edit', editView);
page('/dashboard/:postcardId/delete', deleteView);

page.start();