function time_to_walk(steps, meter, speed){
    let m = steps * meter;
    speed = speed * 1000 / 3600;
    let pochivki = Math.floor((m / 500)) * 60;
    let min = (m / speed) + pochivki;
    let hours = Math.floor(min / 3600).toFixed(0).padStart(2, '0');
    m = Math.floor(min / 60).toFixed(0).padStart(2, '0');
    let sek = (min % 60).toFixed(0).padStart(2, '0');
    console.log(`${hours}:${m}:${sek}`);
}

time_to_walk(4000, 0.60, 5);

