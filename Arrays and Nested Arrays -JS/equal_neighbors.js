function equal_neighbors(array) {
    let p = 0;
    for (let index = 0; index < array.length - 1; index++) {
        const elementUp = array[index];
        const elementDown = array[index + 1];
        for (let col = 0; col < elementUp.length; col++) {
            const colUp = elementUp[col];
            const colDown = elementDown[col];
            if (colUp === colDown) p++;
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let indexRow = 0; indexRow < element.length - 1; indexRow++) {
            const elementMain = element[indexRow];
            const elementNext = element[indexRow + 1];
            if (elementMain === elementNext) p++;
        }
    }
    console.log(p);
}

equal_neighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
);