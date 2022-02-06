const lookupChar = require('./03.CharLookup');
const expect = require('chai').expect;

describe('LookupChar function:', () => {

    it('Should return undefined when 1st parameter is not a string.', () => {
        let actual = lookupChar(11, 0);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 1st parameter is array.', () => {
        let actual = lookupChar(['t', 'e', 's', 't'], 0);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 2nd parameter is real number.', () => {
        let actual = lookupChar('text', 1.5);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 2nd parameter is not a number.', () => {
        let actual = lookupChar('text', 'faceIndex');

        expect(actual).to.be.undefined;
    });

    it('Should return string message when given index is equal to given string length', () => {
        let expected = "Incorrect index";

        let actual = lookupChar('test', 4);

        expect(actual).to.be.equal(expected);
    });

    it('Should return string message when given index is bigger than given string length', () => {
        let expected = "Incorrect index";

        let actual = lookupChar('test', 5);

        expect(actual).to.be.equal(expected);
    });

    it('Should return string message when given index is negative number', () => {
        let expected = "Incorrect index";

        let actual = lookupChar('test', -1);

        expect(actual).to.be.equal(expected);
    });

    it('Should return correct char symbol at index zero', () => {
        let expected = 't';

        let actual = lookupChar('test', 0);

        expect(actual).to.be.equal(expected);
    });

    it('Should return correct char symbol at max possible index', () => {
        let expected = 't';

        let actual = lookupChar('test', 'test'.length-1);

        expect(actual).to.be.equal(expected);
    });
    it('Should return correct char symbol at given index', () => {
        let expected = 'e';

        let actual = lookupChar('test', 1);

        expect(actual).to.be.equal(expected);
    });
})