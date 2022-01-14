function piece_of_pie(array, start, end) {
    let rez = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (rez.length >= 1){
            if(element == end){
                rez.push(element);
                break;
            }
            else{
                rez.push(element);
            }
        } else if(element == start){
            rez.push(element);
        }
    }
    return rez;
}

console.log(piece_of_pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));