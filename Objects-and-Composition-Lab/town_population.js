function town_population(array){
    let towns = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(" <-> ");
        let town = element[0];
        let population = Number(element[1]);
        if(!towns[town]){
            towns[town] = 0;
        }
        towns[town] += population;
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`)
    }
}
town_population(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'] );