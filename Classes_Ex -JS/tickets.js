function solve(array, sortCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    array.forEach(element => {
        let destination = element.split('|')[0];
        let price = element.split('|')[1];
        let status = element.split('|')[2];
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });
    if(sortCriteria == 'destination'){
        tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if(sortCriteria == 'price'){
        tickets.sort((a, b) => {
            return a.price - b.price;
        });
    } else{
        tickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    }

    return tickets;
}


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));