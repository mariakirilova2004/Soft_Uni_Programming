function same_numbers(num){
    let n = num % 10;
    num /= 10;
    num = Math.floor(num, 0);
    let sum = n;
    let flag = 0;
    while (true){
        if (n != num % 10){
            flag++;
        }
        n = num % 10;
        num /= 10;
        num = Math.floor(num, 0);
        sum += n;
        if (num === 0) break;
    }
    if (flag != 0){
        console.log(false);
        console.log(sum);
    } else{
        console.log(true);
        console.log(sum);
    }
}

same_numbers(2222222);