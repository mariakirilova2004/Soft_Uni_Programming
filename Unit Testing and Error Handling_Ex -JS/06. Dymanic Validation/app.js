function validate(){
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', () => {
        let regex = /[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+/gm;
        let flag = inputElement.value.match(regex);
        if (flag == undefined) inputElement.classList.add('error');
        else inputElement.classList.remove('error');
    });
}