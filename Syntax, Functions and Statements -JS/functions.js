// Function declaration
function printFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}

// Function invokation
printFullName('Peter', 'Ivanov')
printFullName('Peter', 'Petrov')
printFullName('Ivan', 'Ivanov')

//Function expression
let countDown = function(number = 10){
    for(let i = number; i > 0; i--){
        console.log(i);
    }
}

countDown(10);

//Arrow function
let countUp = (max) => {
    for(let i = number; i < max; i++){
        console.log(i);
    }
}

countUp(10);

//Return value
function sum(a, b){
    return a + b;
}

let sum = (a, b) =>  a + b;


//Methods
let firstName = 'Pesho';
console.log(firstName.toUpperCase());
console.log(Math.PI);

