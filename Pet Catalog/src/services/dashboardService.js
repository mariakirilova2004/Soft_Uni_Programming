import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);
export const create = (postcardData) => request.post(`${baseUrl}`, postcardData);
export const edit = (postcardId, postcardData) => request.put(`${baseUrl}/${postcardId}`, postcardData);
export const del = (postcardId) => request.del(`${baseUrl}/${postcardId}`);
export const getOne = (postcardId) => request.get(`${baseUrl}/${postcardId}`);
    //const query = encodeURIComponent(`name LIKE "${search}"`);
    //return request.get(`${baseUrl}?where=${query}`);
