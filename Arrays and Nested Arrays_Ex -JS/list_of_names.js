function list_of_names(array) {
    array = array.sort((a, b) => a.localeCompare(b));
    let num = 1;
    array.forEach((name) => {
        console.log(`${num}.${name}`)
        num++;
    });
}

list_of_names(["John", "Bob", "Christina", "Ema"]);