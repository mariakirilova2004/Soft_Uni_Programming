function gsd(num1, num2){
    let a = num1;
    let b = num2;
    while(b != 0){
        let oldB = b;
        b = a % b;
        a = oldB;
    }
    console.log(a);
}

gsd(15, 5);