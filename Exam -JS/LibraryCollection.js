class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor){
        if (this.capacity <= this.books.length){
            throw new Error("Not enough space in the collection.");
        } else{
            this.books.push({bookName, bookAuthor, 'payed': false});
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
    }

    payBook (bookName ){
        let theBook = this.books.find(book =>  book.bookName == bookName);
        if (theBook == undefined){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (theBook.payed == true){
            throw new Error(`${bookName} has already been paid.`);
        }
        theBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook (bookName){
        let i;
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            if (element.bookName == bookName){
                i = index;
                break;
            }
        }
        let theBook = this.books.find(book =>  book.bookName == bookName);
        if (theBook == undefined){
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (theBook.payed == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(i, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics (bookAuthor){
        let str = '';
        if (bookAuthor == undefined){
            str += `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            this.books.sort((a, b) => {return a.bookName.localeCompare(b.bookName)});
            this.books.forEach(book => {
                let fr;
                if (book.payed == true ) fr = 'Has Paid'
                else fr = 'Not Paid';
                str += `\n${book.bookName} == ${book.bookAuthor} - ${fr}.`;
            });
        } else{
            let rez = [];
            this.books.forEach(book => {
                if (book.bookAuthor == bookAuthor) rez.push(book)
            });
            if (rez.length > 0){
                rez.forEach(book => {
                    let fr;
                    if (book.payed == true ) fr = 'Has Paid'
                    else fr = 'Not Paid';
                    str += `${book.bookName} == ${book.bookAuthor} - ${fr}.`;
                });
            } else throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return str.toString();
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


