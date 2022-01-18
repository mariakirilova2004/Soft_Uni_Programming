function sorting_numbers(array) {
    function compareNumbers(a, b) {
        return a - b;
      }
    array.sort(compareNumbers);
    let arr = [];
    let ind = array.length - 1;
    for (let index = 0; index < Math.ceil(array.length / 2); index++) {
        const element = array[index];
        const elementUp = array[array.length - index - 1];
        arr.push(element);
        if(element != elementUp)
        arr.push(elementUp);
    }
    return arr;
}
console.log(sorting_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));