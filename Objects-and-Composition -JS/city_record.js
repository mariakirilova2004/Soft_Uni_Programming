function city_record(name, population, tresury){
    let City = {name: name, population: population, treasury: tresury};
    return City;
}

console.log(city_record('Tortuga', 7000, 15000 ));