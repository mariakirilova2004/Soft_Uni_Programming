import * as api from '../api/api.js';
import * as utils from '../utils.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(email, password){
    await api.post(endpoints.login, {email, password})
    .then(x => {
        utils.saveUser(x);
    })
    .catch(s => {alert(s.json().message)});
}

export async function register(email, password){
    await api.post(endpoints.register, {email, password})
                            .then(x => {
                                utils.saveUser(x);
                            })
                            .catch(x => alert(x.message));
    
}

export function logout(){
    api.get(endpoints.logout);
    utils.deleteUser();
}