const assert = require('chai').assert;
const {library} = require('./library.js');

describe('Tests Library', () => {
    describe('Test calcPriceOfBook()', () => {
        it('If nameOfBook is NOT string and year is integer', () => {
            assert.throws(() => library.calcPriceOfBook(Goliat, 1675), Error, 'Invalid input');
        });
    
        it('If nameOfBook is string and year is NOT integer', () => {
            assert.throws(() => library.calcPriceOfBook('Goliat', '1675'), Error, 'Invalid input');
        });

        it('If nameOfBook is NOT string and year is integer', () => {
            assert.throws(() => library.calcPriceOfBook({'Goliat': 'hj'}, 1675), Error, 'Invalid input');
        });
    
        it('If nameOfBook is string and year is NOT integer', () => {
            assert.throws(() => library.calcPriceOfBook('Goliat', {'1675': 2783}), Error, 'Invalid input');
        });

        it('If year is before 1981', () => {
            assert.equal(library.calcPriceOfBook('Goliat', 1675), 'Price of Goliat is 10.00');
        });

        it('If year is before 1981', () => {
            assert.equal(library.calcPriceOfBook('Goliat', 1980), 'Price of Goliat is 10.00');
        });

        it('If year is after 1981', () => {
            assert.equal(library.calcPriceOfBook('Goliat', 1981), 'Price of Goliat is 20.00');
        });

        it('If year is after 1981', () => {
            assert.equal(library.calcPriceOfBook('Goliat', 2020), 'Price of Goliat is 20.00');
        });
    });

    describe('Test findBook which return function', () => {
        it ('Nothing in the booksArr', () => {
            assert.throws(() => library['findBook']([], 'Goliat'), Error, 'No books currently available');
        });
        it ('Find the desire book', () => {
            assert.equal(library['findBook'](['Fikos', 'Jivot', 'Goliat', 'Kros'], 'Goliat'), 'We found the book you want.');
        });
        it ('Find the desire book', () => {
            assert.equal(library['findBook'](['Fikos', 'Jivot', 'Goliat', 'Kros'], 'Hristos'), 'The book you are looking for is not here!');
        });
    });

    describe('Test arrangeTheBooks()', () => {
        it ('countBooks is NOT integer', () => {
            assert.throws(() => library.arrangeTheBooks('7'), Error, 'Invalid input');
        });
        it ('countBooks is NOT positive', () => {
            assert.throws(() => library.arrangeTheBooks(-7), Error, 'Invalid input');
        });
        it ('Enough space', () => {
            assert.equal(ibrary.arrangeTheBooks(12), 'Great job, the books are arranged.');
        });
        it ('Exactly enough space', () => {
            assert.equal(ibrary.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });
        it ('NOT enough space', () => {
            assert.equal(ibrary.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        });
    });
})