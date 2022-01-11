function solve(n, m){
    let number1 = Number(n);
    let number2 = Number(m); 
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        sum += Number(i);
    }
    return sum;
}

console.log(solve(1, 8));