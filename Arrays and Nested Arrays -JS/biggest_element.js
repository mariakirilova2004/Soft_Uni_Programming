function biggest_element(array) {
    let max = -567890;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let index1 = 0; index1 < element.length; index1++) {
            const element1 = element[index1];
            if(element1 > max) max = element1;
        }
    }
    console.log(max);
}

biggest_element([[20, 50, 10],
    [8, 33, 145]]);