function previous_day(year, month, day){
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}

previous_day(2016, 3, 1);