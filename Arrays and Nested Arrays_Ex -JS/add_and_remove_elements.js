function add_and_remove_elements(array) {
    let rez = [];
    for (let index = 1; index <= array.length; index++) {
        const element = array[index - 1];
        if (element == 'add') rez.push(index)
        else rez.pop(index);
    }
    if (rez.filter(x => x > 0).length > 0)
    console.log(rez.join('\n'));
    else console.log('Empty');
}

add_and_remove_elements(['add', 
'add', 
'add', 
'add']
);