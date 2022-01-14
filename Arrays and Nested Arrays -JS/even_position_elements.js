function even_position_elements(array){
    let rez = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(index % 2 == 0){
            rez += element + ' ';
        }
    }
    console.log(rez);
}

even_position_elements(['20', '30', '40', '50', '60']);