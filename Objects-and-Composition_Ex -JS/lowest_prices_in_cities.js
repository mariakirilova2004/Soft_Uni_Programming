function lowest_prices_in_cities(array) {
    let products = [];
    while(array.length > 0 ){
        let [town, product, price] = array.shift().split(' | '); 
        if (products.filter(x => x.product === product).length > 0){
            let obj = products.find(x => x.product === product);
            if (obj.price > Number(price)) {
                obj.price = Number(price);
                obj.town = town;
            }
        } else{
            let obj = {product, town, price: Number(price)};
            products.push(obj);
        }
    }
    for (const product of products) {
        console.log(`${product.product} -> ${product.price} (${product.town})`)
    }
}
