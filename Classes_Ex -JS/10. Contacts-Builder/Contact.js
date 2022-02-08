class Contact{
    #DomElement;
    #innerOnline;
    constructor(firstName, lastName, phone, email, online = false){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.#DomElement = this.getTemplateElement();
        this.online = online;
    }

    get online(){
        return this.#innerOnline;
    }
    set online(value){
        let titleDivElement = this.#DomElement.querySelector('.title');
        if(value === false){
            
            titleDivElement.classList.remove('online');
        } else{
            titleDivElement.classList.add('online');
        }

        this.#innerOnline = value;
    }
    getTemplateElement(){
        let article = document.createElement('article');

        let titleDivElement = document.createElement('div');
        titleDivElement.classList.add('title');
        titleDivElement.textContent = `${this.firstName} ${this.lastName}`;

        if(this.online === false){
            titleDivElement.classList.remove('online');
        } else {
            titleDivElement.classList.add('online');
        }

        let buttonElement = document.createElement('button');
        buttonElement.textContent = '\u2139'; // maybe need to be unicode

        buttonElement.addEventListener('click', (e) => {
            let mainContainer = e.currentTarget.parentNode.parentNode;
            let divToChange = mainContainer.querySelector('.info');
            if(divToChange.style.display === 'none'){
                divToChange.style.display = 'block';
            } else {
                divToChange.style.display = 'none';
            }
            
        });
        titleDivElement.appendChild(buttonElement);

        let infoDivElement = document.createElement('div');
        infoDivElement.classList.add('info');
        infoDivElement.setAttribute('style', 'display:none');

        let phoneSpanElement = document.createElement('span');
        phoneSpanElement.textContent = `\u260E ${this.phone}`;
        let mailSpanElement = document.createElement('span');
        mailSpanElement.textContent = `\u2709 ${this.email}`;
        infoDivElement.appendChild(phoneSpanElement);
        infoDivElement.appendChild(mailSpanElement);

        article.appendChild(titleDivElement);
        article.appendChild(infoDivElement);

        return article;
    }

    render(id){
        let mainElement = document.getElementById(id);
        mainElement.appendChild(this.#DomElement);
    }
}