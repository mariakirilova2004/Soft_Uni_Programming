function printDeckOfCards(cards) {
    function createCard (thecard){
        let face = thecard.substring(0, thecard.length - 1);
        let suit = thecard[thecard.length - 1];
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
                return this.face.toUpperCase() + suits[this.suit.toUpperCase()];
            }
        }
        return card;
    }
    rez = [];
    for (const card of cards) {
        try {
            let Card = createCard(card);
            rez.push(Card.toString())
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(rez.join(' '));
  }
  printDeckOfCards(['5S', '3D', 'QD', '1C']);