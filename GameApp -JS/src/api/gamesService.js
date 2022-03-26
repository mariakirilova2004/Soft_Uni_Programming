import * as api from '../api/api.js';

const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    all: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
}

export async function getRecent(){
    return api.get(endpoints.recent);
}

export async function getAll(){
    return api.get(endpoints.all);
}

export async function create(data){
    return api.post(endpoints.create, data);
}

export async function getById(id){
    return api.get(endpoints.byId + id);
}

export async function del(id){
    return api.del(endpoints.byId + id);
}

export async function update(id, data){
    return api.put(endpoints.byId + id, data);
}