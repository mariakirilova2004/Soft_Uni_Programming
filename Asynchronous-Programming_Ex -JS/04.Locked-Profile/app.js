function lockedProfile() {
    let mainElement = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    fetch(url)
        .then(el => el.json())
        .then(rez => {
            for (const id in rez) {
                if (Object.hasOwnProperty.call(rez, id)) {
                    const profileElement = rez[id];
                    let ProfileElement = document.createElement('div');
                    ProfileElement.classList.add('profile');
                    ProfileElement.innerHTML = `<img src=\"./iconProfile2.png\" class=\"userIcon\"> <label>Lock</label> <input type=\"radio\" name=\"user1Locked\" value=\"lock\" checked> <label>Unlock</label> <input type=\"radio\" name=\"user1Locked\" value=\"unlock\"><br> <hr> <label>Username</label> <input type=\"text\" name=\"user1Username\" value=\"${profileElement['username']}\" disabled readonly /> <div class=\"hiddenInfo\"> 	<hr> 	<label>Email:</label> 	<input type=\"email\" name=\"user1Email\" value=\"${profileElement['email']}\" disabled readonly /> 	<label>Age:</label> 	<input type=\"email\" name=\"user1Age\" value=\"${profileElement['age']}\" disabled readonly /> </div> <button>Show more</button>`;
                    let buttonElement = ProfileElement.childNodes[19];
                    let inputelements = ProfileElement.childNodes[4];
                    let hiddenElement = ProfileElement.childNodes[17];
                    buttonElement.addEventListener('click', () =>{
                        if (!inputelements.checked){
                            if (buttonElement.textContent == 'Show more'){
                                buttonElement.textContent = 'Hide it';
                                hiddenElement.style.display = 'block';   
                                hiddenElement.style.visability = true;   
                            
                            } else{
                                buttonElement.textContent = 'Show more';
                                hiddenElement.style.display = 'none'; 
                            }
                        }
                    });
                    mainElement.appendChild(ProfileElement);
                }
            }
        })
}

