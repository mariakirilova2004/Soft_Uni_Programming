const mathEnforcer = require('./mathEnforcer.js');
const assert = require('chai').assert;

describe('Function addFive', () => {
    it('Return undefined if not number but string', () =>{
        assert.equal(mathEnforcer['addFive']('5'), undefined);
    });
    
    it('Return undefined if not number but array', () =>{
        assert.equal(mathEnforcer['addFive']([3, 4, 5]), undefined);
    });
    
    it('Return undefined if not number but object', () =>{
        assert.equal(mathEnforcer['addFive']({"name": 'Koko', "age": 23}), undefined);
    });
    
    it('Return 9 if number 4', () =>{
        assert.equal(mathEnforcer['addFive'](4), 9);
    });
    
    it('Return 4 if number -1', () =>{
        assert.equal(mathEnforcer['addFive'](-1), 4);
    });

    it('Return 9.78 if number 4', () =>{
        assert.closeTo(mathEnforcer['addFive'](4.78), 9.78, 0.01);
    });
    
    it('Return 3.34 if number -1.66', () =>{
        assert.closeTo(mathEnforcer['addFive'](-1.66), 3.34, 0.01);
    });
});

describe('Function subtractTen', () => {
    it('Return undefined if not number but string', () =>{
        assert.equal(mathEnforcer['subtractTen']('5'), undefined);
    });
    
    it('Return undefined if not number but array', () =>{
        assert.equal(mathEnforcer['subtractTen']([3, 4, 5]), undefined);
    });
    
    it('Return undefined if not number but object', () =>{
        assert.equal(mathEnforcer['subtractTen']({"name": 'Koko', "age": 23}), undefined);
    });
    
    it('Return -6 if number 4', () =>{
        assert.equal(mathEnforcer['subtractTen'](4), -6);
    });
    
    it('Return -11 if number -1', () =>{
        assert.equal(mathEnforcer['subtractTen'](-1), -11);
    });

    it('Return -11.5 if number -1.5', () =>{
        assert.closeTo(mathEnforcer['subtractTen'](-1.5), -11.5, 0.01);
    });

    it('Return 5.25 if number 15.25', () =>{
        assert.closeTo(mathEnforcer['subtractTen'](15.25), 5.25, 0.01);
    });
});

describe('Function sum', () => {
    it('Return undefined if first number not number but string', () =>{
        assert.equal(mathEnforcer['sum']('5', 3), undefined);
    });
    
    it('Return undefined if first number not number but array', () =>{
        assert.equal(mathEnforcer['sum']([3, 4, 5], 3), undefined);
    });
    
    it('Return undefined if first number not number but object', () =>{
        assert.equal(mathEnforcer['sum']({"name": 'Koko', "age": 23}, 3), undefined);
    });

    it('Return undefined if second number not number but string', () =>{
        assert.equal(mathEnforcer['sum'](5, '5'), undefined);
    });
    
    it('Return undefined if second number not number but array', () =>{
        assert.equal(mathEnforcer['sum'](4, [3, 4, 5]), undefined);
    });
    
    it('Return undefined if second number not number but object', () =>{
        assert.equal(mathEnforcer['sum'](3, {"name": 'Koko', "age": 23}), undefined);
    });

    it('Return undefined if both numbers not numbers but string', () =>{
        assert.equal(mathEnforcer['sum']('5', '5'), undefined);
    });
    
    it('Return undefined if both numbers not numbers but array', () =>{
        assert.equal(mathEnforcer['sum']([3, 4, 5], [3, 4, 5]), undefined);
    });
    
    it('Return undefined if both numbers not numbers but object', () =>{
        assert.equal(mathEnforcer['sum']({"name": 'Koko', "age": 23}, {"name": 'Koko', "age": 23}), undefined);
    });
    
    it('Return 9 if numbers 4 5', () =>{
        assert.equal(mathEnforcer['sum'](4, 5), 9);
    });
    
    it('Return 0 if numbers -3 3', () =>{
        assert.equal(mathEnforcer['sum'](-3, 3), 0);
    });

    it('Return -15 if numbers -7 -8', () =>{
        assert.equal(mathEnforcer['sum'](-7, -8), -15);
    });

    it('Return 10 if numbers 4 5', () =>{
        assert.closeTo(mathEnforcer['sum'](4.90, 5.101), 10, 0.01);
    });
    
    it('Return 0 if numbers -3 3', () =>{
        assert.closeTo(mathEnforcer['sum'](-3.88, 3.88009), 0, 0.01);
    });

    it('Return -15.79 if numbers -7 -8', () =>{
        assert.closeTo(mathEnforcer['sum'](-7.34, -8.45), -15.79, 0.01);
    });
});


