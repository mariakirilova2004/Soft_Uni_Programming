import {router} from  './router.js';
import {update} from  './auth.js';

update();
router('/');
const navigationElement = document.querySelector('.navigation');

const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');
guestNavigation.style.display = 'inline';
userNavigation.style.display = 'inline';

navigationElement.addEventListener('click', (e) =>{
    e.preventDefault();
    
    if(e.target.tagName == 'A'){
        let url = new URL(e.target.href);

        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        router(url.pathname);
    }
});













