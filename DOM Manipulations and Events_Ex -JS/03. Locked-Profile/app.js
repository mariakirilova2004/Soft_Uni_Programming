function lockedProfile() {
    let profileElements = document.querySelectorAll('.profile');
    for (const profileElement of profileElements) {
        let buttonElement = profileElement.getElementsByTagName('button')[0];
        let hiddenElement = profileElement.getElementsByTagName('div')[0];
        let inputelements = profileElement.getElementsByTagName('input');
        buttonElement.addEventListener('click', () =>{
            if (!inputelements[0].checked){
                if (buttonElement.textContent == 'Show more'){
                    buttonElement.textContent = 'Hide it';
                    hiddenElement.style.display = 'block';   

                } else{
                    buttonElement.textContent = 'Show more';
                    hiddenElement.style.display = 'none'; 
                }
            }
        });

    }
}