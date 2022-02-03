function solve(face, suit){
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }
    if (!faces.includes(face)){
        throw new Error;
    }
    let card = {
        face,
        suit,
        toString(){
            console.log(this.face.toUpperCase() + suits[this.suit.toUpperCase()]);
        }
    }
    return card;
}

let card = solve('10', 'h');
console.log(card.toString())