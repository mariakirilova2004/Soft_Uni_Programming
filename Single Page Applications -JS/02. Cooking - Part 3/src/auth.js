const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');

export function update(){
    let serializedUser = localStorage.getItem('user');

    if(serializedUser){
        let user = JSON.parse(serializedUser);
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline';
    } else{
        guestNavigation.style.display = 'inline';
        userNavigation.style.display = 'none';
    }
}

export function logoutRender(){
    localStorage.clear();
    update()
}

export function getToken(){
    let serializedUser = localStorage.getItem('user');
    if(serializedUser){
        let user = JSON.parse(serializedUser);

        return user.accessToken;
    }
}