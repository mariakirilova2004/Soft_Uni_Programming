import * as api from '../api/api.js';

const endpoints ={
    recipes: '/data/recipes',
    recent: '/data/recipes'
}

export async function getRecent(){
    return api.get(endpoints.recent);
}

export async function getAll(){
    return api.get(endpoints.recipes);
}