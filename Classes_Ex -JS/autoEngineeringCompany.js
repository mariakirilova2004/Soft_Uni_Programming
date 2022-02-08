function solve(array){
    let rez = {};
    for (const car of array) {
        let arr = Array.from(car.split(' | '));
        let brand = arr[0];
        let model = arr[1];
        let num = arr[2];
        if(rez[brand] != undefined){
            if(rez[brand][model] != undefined) rez[brand][model] += Number(num);
            else{
                rez[brand][model] = Number(num);
            }
        }
        else {
            rez[brand] = {[model]: Number(num)};
        }
    }
    for (const key in rez) {
        if (Object.hasOwnProperty.call(rez, key)) {
            console.log(key);
            for (const key1 in rez[key]) {
                if (Object.hasOwnProperty.call(rez[key], key1)) {
                    const element = rez[key][key1];
                    console.log(`###${key1} -> ${element}`);
                }
            }
        }
    }
}

solve(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100', 'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10'] );