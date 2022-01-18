function orbit(arr) {
    let height = arr[0];
    let width = arr[1];
    let x = arr[2];
    let y = arr[3];
    let array = [];
    for (let index = 0; index < height; index++) {
        let element = [];
        for (let index1 = 0; index1 < width; index1++) {
            element.push(0);
        }
        array.push(element);
    }
    array[x][y] = 1;
    let cor = [{x,y}];
    while(true){
        for (let index = 0; index < cor.length; index++) {
            let elementx = cor[index].x;
            if(elementx == undefined) elementx = cor[index][0];
            let elementy = cor[index].y;
            if (elementy == undefined) elementy = cor[index][1];
            x = elementx;
            y = elementy;
            if(y + 1 < width && array[x][y + 1] == 0) {
                array[x][y + 1] = array[x][y] + 1;
                cor.push([x, y + 1]);
            }
            if(y - 1 >= 0 && array[x][y - 1] == 0){
                array[x][y - 1] = array[x][y] + 1; 
                cor.push([x, y - 1]);
            } 
            if(x + 1 < height && y - 1 >= 0 && array[x + 1][y - 1] == 0){
                array[x + 1][y - 1] = array[x][y] + 1;
                cor.push([x + 1, y - 1]);
            } 
            if(x + 1 < height && array[x + 1][y] == 0){
                array[x + 1][y] = array[x][y] + 1;
                cor.push([x + 1, y]);
            } 
            if(y + 1 < width && x + 1 < height && array[x + 1][y + 1] == 0){
                array[x + 1][y + 1] = array[x][y] + 1;
                cor.push([x + 1, y + 1]);
            } 
            if(x - 1 >= 0 && y - 1 >= 0 && array[x - 1][y - 1] == 0){
                array[x - 1][y - 1] = array[x][y] + 1;
                cor.push([x - 1, y - 1]);
            } 
            if(x - 1 >= 0 && array[x - 1][y] == 0){
                array[x - 1][y] = array[x][y] + 1;
                cor.push([x - 1, y]);
            } 
            if(y + 1 < width && x - 1 >= 0 && array[x - 1][y + 1] == 0){
                array[x - 1][y + 1] = array[x][y] + 1;
                cor.push([x - 1, y + 1]);
            } 
            cor.shift();
            break;
        }
        let flag = true;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            for (let index1 = 0; index1 < element.length; index1++) {
                const element1 = element[index1];
                if(element1 == 0){
                    flag = false;
                    break;
                }
            }
            if(flag == false) break;
        }
        if(flag){
            break;
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element.join(' '));
    }
}

orbit([3, 3, 2, 2]);