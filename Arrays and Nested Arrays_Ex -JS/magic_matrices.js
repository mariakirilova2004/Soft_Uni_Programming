function magic_matrices(array) {
    let rez = false;
    let sum = 0;
    for (const iterator of array[0]) {
        sum += iterator;
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let sums = 0;
        for (let index1 = 0; index1 < element.length; index1++) {
            const element1 = element[index1];
            sums += element1;
        }
        if (sum == sums) rez = true;
        else{
            rez = false;
            break;
        } 
    }
    for (let index = 0; index < array[0].length; index++) {
        let sums = 0;
        for (let index1 = 0; index1 < array.length; index1++) {
            sums += array[index][index1];
        }
        if (rez == true && sum == sums) rez = true;
        else{
            rez = false;
            break;
        } 
    }
    console.log(rez);
}

magic_matrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );