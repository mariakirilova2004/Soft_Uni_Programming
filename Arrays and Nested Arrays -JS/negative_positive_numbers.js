function negative_positive_numbers(array) {
    let rez = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < 0) rez.unshift(element);
        else rez.push(element);
    }
    rez.forEach(element => {
        console.log(element);
    });
}

negative_positive_numbers([7, -2, 8, 9]);