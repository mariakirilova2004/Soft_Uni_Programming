function towns_to_json(array) {
    let result = [];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        let[Town, Latitude, Longitude] = element.split(' | ');
        Town = Town.slice(2, Town.length + 1);
        Longitude = Longitude.slice(0, Longitude.length - 1);
        Latitude = Number(Latitude).toFixed(2);
        Latitude = Number(Latitude);
        Longitude = Number(Longitude).toFixed(2);
        Longitude = Number(Longitude);
        result.push({Town, Latitude, Longitude});
    }
    console.log(JSON.stringify(result));
}    

towns_to_json(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);