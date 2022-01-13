function validity_checker(x1, y1, x2, y2){
    if(Math.sqrt((x1 * x1) + (y1 * y1)) % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }
    if(Math.sqrt((x2 * x2) + (y2 * y2)) % 1 == 0){
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }
    if(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validity_checker(2, 1, 1, 1);