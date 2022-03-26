import * as utils from '../utils.js';

const host = 'http://localhost:3030';

const request = (method, url, data) =>{
    let options = {};
    let token = utils.getToken();
    if(method != 'GET'){
        options.method = method;
        options.headers = {
            'Content-Type': 'application/json',
        };

        if(token){
            options.headers['X-Authorization'] = token;
        }
        options.body = JSON.stringify(data);
    }
    if(url!='/users/logout'){
        return fetch(host + url, options)
        .then(res => res.json());
    }else{
        return fetch(host + url, {headers: {'X-Authorization': token}});
    }
    
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');