export function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
}

export function getAccessToken(){
    const user = getUserData();
    if (user){
        return user.accessToken;
    }
}

export function clearUserData(){
    localStorage.removeItem('user');
}