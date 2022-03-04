import {home} from './home.js';
import {login} from './login.js';
import {register} from './register.js';
import {create} from './create.js';
import {notfound} from './notfound.js';
import {logout} from './logout.js';

const routes = {
    '/': home,
    '/login': login,
    '/create': create,
    '/register': register,
    '/logout': logout,
}

export function router(path){
    hideSections();

    const renderer = routes[path] || notfound;
    renderer();
}

function hideSections(){
    let sections = document.getElementById('main');
    for (const element of sections.children) {
        element.style.display = 'none';
    }
}