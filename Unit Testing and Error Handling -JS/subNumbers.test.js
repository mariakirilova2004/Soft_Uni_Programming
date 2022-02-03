const assert = require('assert').strict;
//const request = require('request');
const solve = require('./subNumbers.js');

it('ShouldCalculateSum', () =>{
    let arr = [1, 2, 2, 3];
    let rez = 8;
    let suma = solve(arr);
    assert.equal(suma, rez);
});