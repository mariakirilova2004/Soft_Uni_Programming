function circle_area(r){
    if(typeof(r) == 'number'){
        console.log((Math.PI * r *r).toFixed(2));
    } else{
        console.log('We can not calculate the circle area, because we receive a ' + typeof(r) +'.')
    }
}

console.log(Math.round(circle_area(5)));