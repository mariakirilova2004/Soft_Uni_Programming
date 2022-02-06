const isOddOrEven = require("./isOddOrEven.js");
const assert = require('chai').assert;

it('Return undefined', () => {
    assert.equal(isOddOrEven(23), undefined);
});

it('Return undefined', () => {
    assert.equal(isOddOrEven({'name': 'gigi'}), undefined);
});
it('Return even', () => {
    assert.equal(isOddOrEven('67'), 'even');
});

it('Return even', () => {
    assert.equal(isOddOrEven('gigi'), 'even');
});
it('Return odd', () => {
    assert.equal(isOddOrEven('6'), 'odd');
});

it('Return odd', () => {
    assert.equal(isOddOrEven('gigir'), 'odd');
});