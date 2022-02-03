const assert = require('chai').assert
const isSymmetric = require('./checkForSymmetry.js');

describe('Symmetric', () =>{
    it('ShouldReturnFalseIfNotOfCorrectType', () => {
        let input = 'as';
        let output = isSymmetric(input);
        assert.equal(output, false);
    });
    
    it('ShouldReturnFalseIfNotSymmetrical', () => {
        let input = [1, 2, 3];
        let output = isSymmetric(input);
        assert.equal(output, false);
    });

    it('ShouldReturnTrueIfSymmetrical', () => {
        let input = [1, 2, 1];
        let output = isSymmetric(input);
        assert.equal(output, true);
    });

    it('ShouldReturnFalseIfNotSymmetrical', () => {
        let input = ['zs', 'as', 'as'];
        let output = isSymmetric(input);
        assert.equal(output, false);
    });

    it('ShouldReturnTrueIfSymmetrical', () => {
        let input = ['as', 'as', 'as'];
        let output = isSymmetric(input);
        assert.equal(output, true);
    });
})
