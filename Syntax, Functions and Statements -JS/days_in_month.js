function days_in_month(num, year){
    let rez = 0;
    if(num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12){
        rez = 31;
    } else if(num == 4 || num == 6 || num == 9 || num == 11){
        rez = 30; 
    } else if(num == 2 && year % 4 == 0){
        rez = 29; 
    } else if(num == 2 && year % 4 != 0){
        rez = 28; 
    }
    return rez;
}

console.log(days_in_month(2, 2020));