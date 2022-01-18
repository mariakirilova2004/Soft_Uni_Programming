function rotate_array(array, n) {
    for (let index = 0; index < n; index++) {
        let off = array.pop();
        array.unshift(off);
    }
    console.log(array.join(' '))
}

rotate_array(['1', '2', '3', '4'], 2);