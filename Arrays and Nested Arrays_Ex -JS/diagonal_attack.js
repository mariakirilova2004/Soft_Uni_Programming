function diagonal_attack(array){
    let sumMain = 0;
    let sumSec = 0;
    let cordinates = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(' ');
        array[index] = element;
    }
    for (let index = 0; index < array.length; index++) {
        for (let index1 = index; index1 < index + 1; index1++) {
            sumMain += Number(array[index][index1]);
            cordinates.push(`${index}${index1}`);
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let index1 = element.length - index - 1; index1 < element.length; index1++) {
            const element1 = element[index1];
            sumSec += Number(element1);
            cordinates.push(`${index}${index1}`);
            break;
        }
    }
    if (sumSec == sumMain){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            for (let index1 = 0; index1 < element.length; index1++) {
                const element1 = element[index1];
                let flag = true
                for (let i = 0; i < cordinates.length; i++) {
                    const cor = cordinates[i];
                    if(cor[0] == index && cor[1] == index1){
                        flag = false;
                        break;
                    }
                }
                
                if(flag){
                    array[index][index1] = sumMain;
                }
            }
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element.join(' '));
    }
}

diagonal_attack(['1 1 1',
'1 1 1',
'1 1 0']
);