function print_every_n_th_element_from_an_array(array, N){
    let rez= [];
    for (let index = 0; index < array.length; index+=N) {
        const element = array[index];
        rez .push(element);
    }
    return rez;
}

console.log(print_every_n_th_element_from_an_array(['5', '20', '31', '4', '20'], 2));