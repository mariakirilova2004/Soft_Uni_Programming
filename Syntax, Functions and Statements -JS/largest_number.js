function output(a, b, c){
    if(a > b && b > c){
        console.log('The largest number is ' + a + '.')
    } else if(a > b && a > c){
        console.log('The largest number is ' + a + '.')
    } else if(b > a && a > c){
        console.log('The largest number is ' + b + '.')
    } else if(b > a && b > c){
        console.log('The largest number is ' + b + '.')
    }
    else console.log('The largest number is ' + c + '.')
}