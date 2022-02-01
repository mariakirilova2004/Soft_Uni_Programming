function solution(){
    let storage = {};  
    return function(string){
        let input = Array.from(string.split(' '));
        if (input[0] == 'restock'){
            if (!storage[input[1]]) storage[input[1]] = 0;
            storage[input[1]] += Number(input[2]);
            return('Success');
        } else if(input[0] == 'prepare'){
            if (input[1] == 'apple'){
                if (storage['carbohydrate'] >= 1 * input[2]){
                    if (storage['flavour'] >= 2 * input[2]){
                        storage['carbohydrate'] -= 1 * input[2];
                        storage['flavour'] -= 2 * input[2];
                        return('Success');
                    } else{
                        return('Error: not enough flavour in stock');
                    }
                } else{
                    return('Error: not enough carbohydrate in stock');
                }
            } else if (input[1] == 'lemonade'){
                if (storage['carbohydrate'] >= 10 * input[2]){
                    if (storage['flavour'] >= 20 * input[2]){
                        storage['carbohydrate'] -= 10 * input[2];
                        storage['flavour'] -= 20 * input[2];
                        return('Success');
                    } else{
                        return('Error: not enough flavour in stock');
                    }
                } else{
                    return('Error: not enough carbohydrate in stock');
                }
            } else if (input[1] == 'burger'){
                if (storage['carbohydrate'] >= 5 * input[2]){
                    if (storage['fat'] >= 7 * input[2]){
                        if (storage['flavour'] >= 3 * input[2]){
                            storage['carbohydrate'] -= 5 * input[2];
                            storage['fat'] -= 7 * input[2];
                            storage['flavour'] -= 3 * input[2];
                            return('Success');
                        } else{
                            return('Error: not enough flavour in stock');
                        }
                    } else{
                        return('Error: not enough fat in stock');
                    }
                } else{
                    return('Error: not enough carbohydrate in stock');
                }
            } else if (input[1] == 'eggs'){
                if (storage['protein'] >= 5 * input[2]){
                    if (storage['fat'] >= 1 * input[2]){
                        if (storage['flavour'] >= 1 * input[2]){
                            storage['protein'] -= 5 * input[2];
                            storage['fat'] -= 1 * input[2];
                            storage['flavour'] -= 1 * input[2];
                            return('Success');
                        } else{
                            return('Error: not enough flavour in stock');
                        }
                    } else{
                        return('Error: not enough fat in stock');
                    }
                } else{
                    return('Error: not enough protein in stock');
                }
            } else if (input[1] == 'turkey'){
                if (storage['protein'] >= 10 * input[2]){
                    if (storage['carbohydrate'] >= 10 * input[2]){
                        if (storage['fat'] >= 10 * input[2]){
                            if (storage['flavour'] >= 10 * input[2]){
                                storage['protein'] -= 10 * input[2];
                                storage['fat'] -= 10 * input[2];
                                storage['flavour'] -= 10 * input[2];
                                storage['carbohydrate'] -= 10 * input[2];
                                return('Success');
                            } else{
                                return('Error: not enough flavour in stock');
                            }
                        } else{
                            return('Error: not enough fat  in stock');
                        }
                    } else{
                        return('Error: not enough carbohydrate in stock');
                    }
                } else{
                    return('Error: not enough protein in stock');
                }
            }
        } else if(input[0] == 'report'){
            if (storage['protein'] == undefined){
                storage['protein'] = 0;
            } else if (storage['carbohydrate'] == undefined){
                storage['carbohydrate'] = 0;
            } else if (storage['fat'] == undefined){
                storage['fat'] = 0;
            } else if (storage['flavour'] == undefined){
                storage['flavour'] = 0;
            }
            return `protein=${storage['protein']} carbohydrate=${storage['carbohydrate']} fat=${storage['fat']} flavour=${storage['flavour']}`;
        }
    }
}

let manager = solution(); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10"));  
console.log (manager ("restock flavour 10"));  
console.log (manager ("prepare apple 1"));  
console.log (manager ("restock fat 10"));  
console.log (manager ("prepare burger 1"));  
console.log (manager ("report"));  
