function road_radar(speed, road){
    let status = '';
    function check(speed, per){
        if(speed - per <= 20){
            return 'speeding';
        } else if(speed - per <= 40){
            return 'excessive speeding';
        } else{
            return 'reckless driving';
        }
    }
    if (road == 'residential'){
        if(speed > 20){
            status = check(speed, 20);
            status = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - ${status}`;
        } else{
            status = `Driving ${speed} km/h in a 20 zone`;
        }
    } else if (road == 'city'){
        if(speed > 50){
            status = check(speed, 50);
            status = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - ${status}`;
        } else{
            status = `Driving ${speed} km/h in a 50 zone`;
        }
    } else if (road == 'interstate'){
        if(speed > 90){
            status = check(speed, 90);
            status = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - ${status}`;
        } else{
            status = `Driving ${speed} km/h in a 90 zone`;
        }
    } else if (road == 'motorway'){
        if(speed > 130){
            status = check(speed, 130);
            status = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - ${status}`;
        } else{
            status = `Driving ${speed} km/h in a 130 zone`;
        }
    }
    console.log(status);
}

road_radar(40, 'residential');