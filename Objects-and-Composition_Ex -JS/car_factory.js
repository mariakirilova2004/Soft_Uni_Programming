function car_factory(car){
    car.engine = {};
    if(car.power <= 105){
        car.engine['power'] = 90;
        car.engine['volume'] = 1800;
    } else if (car.power <= 145){
        car.engine['power'] = 120;
        car.engine['volume'] = 2400;
    } else{
        car.engine['power'] = 200;
        car.engine['volume'] = 3500;
    }  
    delete car.power;
    while(car.wheelsize % 2 == 0){
        car.wheelsize--;
    }
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    delete car.wheelsize;
    let carriage = car.carriage;
    delete car.carriage;
    car.carriage = {};
    car.carriage['type'] = carriage;
    car.carriage['color'] = car.color;
    delete car.color;
    return car;
}

console.log(car_factory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));