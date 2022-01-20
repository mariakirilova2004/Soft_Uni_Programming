function store_catalogue(array) {
    array = array.sort((a, b) => a.localeCompare(b));
    let products = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let [product, price] = element.split(' : ');
        price = Number(price);
        products[product] = price;
    }
    let char = '';
    for (const product of Object.keys(products)) {
        if(product[0] != char){
            char = product[0];
            console.log(char);
        }
        console.log(` ${product}: ${products[product]}`);
    }
}

store_catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);