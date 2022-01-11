function stars(num){
    let rez = '';
    for (let index = 1; index <= num; index++) {
        for (let j = 0; j < num; j++) {
            rez += '* ';
        }
        rez += "\n";
    }
    return rez;
}

console.log(stars(1))