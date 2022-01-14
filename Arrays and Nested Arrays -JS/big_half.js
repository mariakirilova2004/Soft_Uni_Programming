function bigger_half(array) {
    array.sort((a, b) => a - b);
    array = array.slice(Math.floor(array.length / 2));
    return array;
}

bigger_half([4, 7, 2, 5]);