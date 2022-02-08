const expect = require("chai").expect;
const StringBuilder = require("./string-builder.js");

describe('StringBuilder class testing:', () => {
    it('An instance of the class should set an array of characters', () => {
        let sb = new StringBuilder('test');
        let expected = ['t', 'e', 's', 't'];
        expect(sb._stringArray).to.be.eql(expected);
    });

    it('An instance of the class should set an empty array when nothing is given', () => {
        let sb = new StringBuilder();
        let expected = [];
        expect(sb._stringArray).to.be.eql(expected);
    });

    it('An instance of the class should set an empty array when undefined is given', () => {
        let sb = new StringBuilder(undefined);
        let expected = [];
        expect(sb._stringArray).to.be.eql(expected);
    });

    it('An instance of the class should set an empty array when empty string is given', () => {
        let sb = new StringBuilder('');
        let expected = [];
        expect(sb._stringArray).to.be.eql(expected);
    });

    it('An instance of the class should throw exception when number is given', () => {
        let actual = () => { new StringBuilder(15) };
        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('An instance of the class should throw exception when an array is given', () => {
        let actual = () => { new StringBuilder([15, 16]) };
        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('An instance of the class should throw exception when object is given', () => {
        let actual = () => { new StringBuilder({}) };
        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Append method should add in the end given non-empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'testappend';

        sb.append('append');

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    

    it('Append method should add nothing when is given empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'test';

        sb.append('');

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Append method should throw exception when a number parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.append(15) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Append method should throw exception when an object parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.append({}) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Append method should throw exception when an array parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.append(['t', 'e']) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Prepend method should add in the beginning the given non-empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'pretest';

        sb.prepend('pre');

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Prepend method should add nothing when is given empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'test';

        sb.prepend('');

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Prepend method should throw exception when a number parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.prepend(15) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Prepend method should throw exception when an object parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.prepend({}) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Prepend method should throw exception when an array parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.prepend(['t', 'e']) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    // new
    it('InsertAt method should add in the given index the given non-empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'tebetweenst';

        sb.insertAt('between', 2);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('InsertAt method should add in the beginning when given index is zero the given', () => {
        let sb = new StringBuilder('test');
        let expected = 'zerotest';

        sb.insertAt('zero', 0);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('InsertAt method should add in the end when given index is equal than the length of innerArray', () => {
        let sb = new StringBuilder('test');
        let expected = 'testend';

        sb.insertAt('end', 4);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('InsertAt method should add in the end when given index is bigger than the length of innerArray', () => {
        let sb = new StringBuilder('test');
        let expected = 'testend';

        sb.insertAt('end', 7);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('InsertAt method should add nothing when is given empty string value', () => {
        let sb = new StringBuilder('test');
        let expected = 'test';

        sb.insertAt('');

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('InsertAt method should throw exception when a number parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.insertAt(15) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('InsertAt method should throw exception when an object parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.insertAt({}) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('InsertAt method should throw exception when an array parameter is given', () => {
        let sb = new StringBuilder('test');

        let actual = () => { sb.insertAt(['t', 'e']) };

        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Remove method should remove characters at given index with given length', () => {
        let sb = new StringBuilder('test');
        let expected = 'tt';
        sb.remove(1,2);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove nothing when given length is zero', () => {
        let sb = new StringBuilder('test');
        let expected = 'test';
        sb.remove(1,0);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove only characters that exist when given length goes over the length of string length', () => {
        let sb = new StringBuilder('test');
        let expected = 't';
        sb.remove(1,10);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove whole string when given length is same as inner string length and index is equal to zero', () => {
        let sb = new StringBuilder('test');
        let expected = '';
        sb.remove(0,4);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove only first character when given index is zero and length is one', () => {
        let sb = new StringBuilder('test');
        let expected = 'est';
        sb.remove(0,1);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove only last character when given index is last possible and length is one', () => {
        let sb = new StringBuilder('test');
        let expected = 'tes';
        sb.remove(3,1);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should should do nothing when negative length', () => {
        let sb = new StringBuilder('test');
        let expected = 'test';
        sb.remove(0,-100);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Remove method should remove from the end to the start, ignoring length parameter', () => {
        let sb = new StringBuilder('test');
        let expected = 'te';
        sb.remove(-2, 100);

        expect(sb.toString()).to.be.equal(expected);
        expect(sb._stringArray).to.be.eql(Array.from(expected));
    });

    it('Static method should throw an error when given parameter is not a string', () => {
        let actual = () => {StringBuilder._vrfyParam(15)};
        expect(actual).to.throw(TypeError, 'Argument must be a string');
    });

    it('Static method should not throw an error when given parameter is not a string', () => {
        let actual = () => {StringBuilder._vrfyParam('string')};
        expect(actual).to.not.throw(TypeError, 'Argument must be a string');
    });

    it('ToString method should return correct value', () => {
        let sb = new StringBuilder('');
        let expexted = 'testtesttest';
        sb.append('test');
        sb.prepend('test');
        sb.insertAt('test', 4);

        expect(sb.toString()).to.be.equal(expexted);
    })
})