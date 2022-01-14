function process_odd_positions(array) {
    let rez = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(index % 2 != 0) rez.push(element);
    }
    rez = rez.map(x =>  x * 2);
    rez = rez.reverse();
    console.log(rez.join(' '));
}

process_odd_positions([1, 0, 1, 0]);