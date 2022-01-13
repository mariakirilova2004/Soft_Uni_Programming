function fruit(fruit, gr, price){
    console.log('I need $' + ((gr / 1000) * price).toFixed(2) + ' to buy ' + (gr / 1000).toFixed(2) + ' kilograms ' + fruit + '.');
}

fruit('orange', 2500, 1.80);