function extract(content) {
    let pElement = document.getElementById(content);
    let flag = false;
    let result = [];
    let string = '';
    for (let index = 0; index < pElement.innerText.length; index++) {
        const element = pElement.innerText[index];
        if (flag && element != ')'){
            string += element;
        } else if (element == '('){
            flag = true;
        } else if (element == ')'){
            result.push(string);
            flag = false;
            string = '';
        }
    }
    return result.join('; ');
}