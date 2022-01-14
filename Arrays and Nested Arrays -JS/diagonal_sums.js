function diagonal_sums(array) {
    let main = 0;
    let secondary = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        main += element[index];
    }
    let col = array[0].length - 1;
    for (let index = 0; index < array.length; index++) {   
        const element = array[index];
        secondary += element[col];
        col--;
    }
    console.log(main + " " + secondary);
}

diagonal_sums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);