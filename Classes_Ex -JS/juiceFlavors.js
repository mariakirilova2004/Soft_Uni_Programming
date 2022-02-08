function solve(array){
    let obj ={};
    let rez ={};
    array.forEach(element => {
        element = Array.from(element.split(' => '));
        if (obj[element[0]] == undefined) obj[element[0]] = Number(element[1]);
        else obj[element[0]] += Number(element[1]);
        if (obj[element[0]] >= 1000){
            if (rez[element[0]] == undefined) {
                rez[element[0]] = Math.floor(obj[element[0]] / 1000);
                obj[element[0]] %= 1000;
            }
            else {
                rez[element[0]] += Math.floor(obj[element[0]] / 1000);
                obj[element[0]] %= 1000;
            }
        }
    });
    for (const key in rez) {
        if (Object.hasOwnProperty.call(rez, key)) {
            const element = rez[key];
            console.log(`${key} => ${element}`);
        }
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);