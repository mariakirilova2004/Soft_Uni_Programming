function calorie_object(array) {
    let products = {}
    for (let index = 0; index < array.length; index += 2) {
        let name = array[index];
        let calorie = Number(array[index + 1]);
        products[name] = calorie;
    };
    console.log(products);
}
calorie_object(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);