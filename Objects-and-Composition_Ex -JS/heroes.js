function solve() {
    let obj = 
    {
        fighter(name){
            let figh = {
                name: name,
                health: 100,
                stamina: 100,
                fight(){
                    this.stamina -= 1;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
            return figh;
        },

        mage(name){
            let mag = {
                name: name,
                health: 100,
                mana: 100,
                cast(spell){
                    this.mana -= 1;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
            return mag;
        }
    }
    return obj;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
