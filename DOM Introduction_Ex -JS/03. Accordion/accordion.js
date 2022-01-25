function toggle() {
    let button = document.querySelector('.button');
    let text = document.querySelector('#extra');
    if(button.textContent === 'Less'){
        button.textContent = 'More';
        text.style.display = 'none';
    } 
    else{
        button.textContent = 'Less';
        text.style.display = 'block';
    }
    console.log(button);
}
