function cooking_by_numbers(num, op1, op2, op3, op4, op5) {
    let inputAsNumber = Number(num);
    let arrOfCommands = [op1, op2, op3, op4, op5];
    let chop = function(){
        return inputAsNumber / 2;
    };
    let dice = function(){
        return Math.sqrt(inputAsNumber);
    };
    let spice = function(){
        return inputAsNumber + 1;
    };
    let bake = function(){
        return inputAsNumber * 3;
    };
    let fillet = function(){
        return inputAsNumber * 0.80;
    };
    for (let index = 0; index < arrOfCommands.length; index++) {
        const element = arrOfCommands[index];
        if(element == 'chop'){
            inputAsNumber = chop(inputAsNumber);
            console.log(inputAsNumber);
        } else if (element == 'dice'){
            inputAsNumber = dice(inputAsNumber);
            console.log(inputAsNumber);
        } else if (element == 'spice'){
            inputAsNumber = spice(inputAsNumber);
            console.log(inputAsNumber);
        } else if (element == 'bake'){
            inputAsNumber = bake(inputAsNumber);
            console.log(inputAsNumber);
        } else if (element == 'fillet'){
            inputAsNumber = fillet(inputAsNumber);
            console.log(inputAsNumber);
        }
    }
}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');