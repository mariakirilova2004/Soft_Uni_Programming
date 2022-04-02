import * as request from './requester.js';

const baseUrlDonate = 'http://localhost:3030/data/donation';

export const donate = (postcardId) => request.post(`${baseUrlDonate}`, {petId: postcardId});
export const countForAPet = (postcard) => request.get(`${baseUrlDonate}?where=petId%3D%22${postcard._id}%22&distinct=_ownerId&count`);
export const isItLiked = (postcard, user) => request.get(`${baseUrlDonate}?where=petId%3D%22${postcard._id}%22%20and%20_ownerId%3D%22${user._id}%22&count`);
