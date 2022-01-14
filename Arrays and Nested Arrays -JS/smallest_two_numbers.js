function smallest_two_numbers(array) {
    let small1;
    let small2;
    if(array[0] < array[1]){
        small1 = array[0];
        small2 = array[1];
    }
    else{
        small1 = array[1];
        small2 = array[0];
    }
    for (let index = 2; index < array.length; index++) {
        const element = array[index];
        if (element < small2) {
            if (element < small1) {
                let a = small2;
                small2 = small1;
                small1 = element;
            }
            else{
                small2 = element
            }  
        }
    }
    console.log(`${small1} ${small2}`);
}

smallest_two_numbers([30, 15, 50, 5]);