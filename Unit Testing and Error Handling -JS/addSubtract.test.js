const expect = require('chai').expect;
const createCalculator = require('./addSubtract.js');

describe('CreateCalculator function:', () => {

    it('Should return object with 3 keys - "add", "subtract" and "get"', () => {
        let actual = createCalculator();

        expect(actual).to.be.an('object').that.has.keys('add', 'subtract', 'get');
        
    });

    it('Should return an object with 3 functions in it.', () => {
        let actual = createCalculator();

        expect(actual.add).to.be.a('function');
        expect(actual.subtract).to.be.a('function');
        expect(actual.get).to.be.a('function');
    });

    it('Should return zero when nested function get is called and there are no others calls of nested functions', () => {
        let actual = createCalculator().get();

        expect(actual).to.be.equal(0);
    });

    it('Should increase the value when nested function add is called.', () =>{
        let expected = 15;
        let actual = createCalculator();

        actual.add(15);

        expect(actual.get()).to.be.equal(expected);
    });

    it('Should throw a TypeError when nested function add accept not a digit sequence parameter.', () => {
        let actual = () => {createCalculator.add('notANumber')};

        expect(actual).to.throw(TypeError);
    });

    it('Should work correctly when nested function add accept number as string parameter', () =>{
        let expected = 15;
        let actual = createCalculator();

        actual.add('15');

        expect(actual.get()).to.be.equal(expected);
    });

    it('Should decrease the value when nested function subtract is called', () => {
        let expected = -15;
        let actual = createCalculator();

        actual.subtract(15);

        expect(actual.get()).to.be.equal(expected);
    });

    it('Should throw a TypeError when nested function subtract accept not a digit sequence parameter.', () => {
        let actual = () => {createCalculator.subtract('notANumber')};

        expect(actual).to.throw(TypeError);
    });

    it('Should work correctly when nested function add accept number as string parameter', () =>{
        let expected = -15;
        let actual = createCalculator();

        actual.subtract('15');

        expect(actual.get()).to.be.equal(expected);
    });

    it('Should work as expected (closure value to be changed) when add and subtract are called one after another.', () => {
        let expected = 10;

        let actual = createCalculator();

        actual.add(20);
        actual.subtract(15);
        actual.subtract('-5');

        expect(actual.get()).to.be.equal(expected);
    });
})