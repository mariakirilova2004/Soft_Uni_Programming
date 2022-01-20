function heroic_inventory(array) {
    let heroes = [];
    let name = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(' / ');
        let [name, level, items] = element;
        level = Number(level);
        items = items ? items.split(', '):[];
        heroes.push({name, level, items});
    }
    console.log(JSON.stringify(heroes));
}

heroic_inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);