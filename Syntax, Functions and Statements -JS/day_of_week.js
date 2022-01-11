function day_of_week(num) {
    let day;
    switch (num) {
        case 'Monday':
            day = 1;
            break;
        case 'Tuesday':
            day = 2;
            break;
        case 'Wednesday':
            day = 3;
            break;
        case 'Thursday':
            day = 4;
            break;
        case 'Friday':
            day = 5;
            break;
        case 'Saturday':
            day = 6;
            break;
        case 'Sunday':
            day = 7;
            break;
        default: 
            day = 'error'
            break;
    }
    return day;
}

console.log(day_of_week(2));