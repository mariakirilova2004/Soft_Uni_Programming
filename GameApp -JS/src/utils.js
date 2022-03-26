export const saveUser = (user) =>{
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user));
    }
};

export const deleteUser = () =>{
        localStorage.removeItem('user');
    };

export const getUser = () =>{
    let serializedUser = localStorage.getItem('user');

    if(serializedUser){
        let user = JSON.parse(serializedUser);
        return user;
    }
};

export const getToken = () =>{
    return getUser()?.accessToken;
}

export function createSubmitHandler(ctx, handler){
    return function (event){
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));
        handler(ctx, formData, event);
    };
};

export function parseQuerystring(query = ''){
    return Object.fromEntries( query
        .split('&')
        .map(kvp => kvp.split('='))
    );
}