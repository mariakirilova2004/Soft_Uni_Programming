const expect = require("chai").expect;
const PaymentPackage = require("./PaymentPackage.js");

describe('PaymentPackage class testing:', () => {

    it('An instance of the class should have inner property _name with correct value', () => {
      let pp = new PaymentPackage('test', 15);
      expect(pp).to.haveOwnProperty('_name', 'test');
    });
  
    it('An instance of the class should have accessor "name" with correct value', () => {
      let pp = new PaymentPackage('test', 15);
      expect(pp).to.have.property('name', 'test')
    });
  
    it('An instance of the class should throw exception when empty string passed in constructor for name', () => {
      let actual = () => { new PaymentPackage('', 15) };
      expect(actual).to.throw(Error, 'Name must be a non-empty string');
    });
  
    it('An instance of the class should throw exception when number parameter passed in constructor for name', () => {
      let actual = () => { new PaymentPackage(15, 15) };
      expect(actual).to.throw(Error, 'Name must be a non-empty string');
    });
  
    it('An instance of the class should throw exception when object parameter passed in constructor for name', () => {
      let actual = () => { new PaymentPackage({}, 15) };
      expect(actual).to.throw(Error, 'Name must be a non-empty string');
    });
  
    it('An instance of the class should throw exception when array parameter passed in constructor for name', () => {
      let actual = () => { new PaymentPackage(['test'], 15) };
      expect(actual).to.throw(Error, 'Name must be a non-empty string');
    });
  
    it('Name getter should return correct value for name', () => {
      let expected = 'test';
      let pp = new PaymentPackage(expected, 15);
  
      expect(pp.name).to.be.equals(expected);
    });
  
    it('Name setter should set correct value for name', () => {
      let expected = 'test';
      let pp = new PaymentPackage('test123453', 15);
      pp.name = expected;
  
      expect(pp.name).to.be.equals(expected);
    });
  
    it('An instance of the class should have a inner property with correct value', () => {
      let pp = new PaymentPackage('test', 15);
      expect(pp).to.haveOwnProperty('_value', 15);
    });
  
    it('An instance of the class should have a accessor property with correct value', () => {
      let pp = new PaymentPackage('test', 15);
      expect(pp).to.have.property('value', 15);
    });
  
    it('Getter should return correct value for "value" property', () =>{
      let pp = new PaymentPackage('test', 15);
      expect(pp.value).to.be.equal(15);
    });
  
    it('Setter for "value" property should set correct value for it', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 23;
      pp.value = expected;
      expect(pp.value).to.be.equal(expected);
    });
  
    it('Setter for "value" property should set correct real number for it', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 23.5;
      pp.value = expected;
      expect(pp.value).to.be.equal(expected);
    });
  
    it('Setter for "value" property should work correctly when is given zero', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 0;
      pp.value = expected;
      expect(pp.value).to.be.equal(expected);
    });
  
    it('Value property should throw expeption when is given difftent than number parameter', () =>{
      let actual = () => { new PaymentPackage('test', 'not a correct value'); }
  
      expect(actual).to.throw(Error, 'Value must be a non-negative number');
    });
  
    it('Value property should throw expeption when is given parameter is negative number', () =>{
      let actual = () => { new PaymentPackage('test', -15.5); }
  
      expect(actual).to.throw(Error, 'Value must be a non-negative number');
    });
  
    it('Value property should throw expeption when is given parameter is number as string', () =>{
      let actual = () => { new PaymentPackage('test', '15'); }
  
      expect(actual).to.throw(Error, 'Value must be a non-negative number');
    });
  
    it('Value property should throw expeption when is given parameter is an object', () =>{
      let actual = () => { new PaymentPackage('test', {}); }
  
      expect(actual).to.throw(Error, 'Value must be a non-negative number');
    });
  
    it('Value property should throw expeption when is given parameter is an array', () =>{
      let actual = () => { new PaymentPackage('test', [15, 16]); }
  
      expect(actual).to.throw(Error, 'Value must be a non-negative number');
    });
  
    it('VAT property should be setted with default value', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 20;
  
      expect(pp.VAT).to.be.equal(expected);
    });
  
    it('An instance of the class should have inner property _VAT', () => {
      let pp = new PaymentPackage('test', 15);
  
      expect(pp).to.haveOwnProperty('_VAT', 20);
    });
  
    it('An instance of the class should have accessor property VAT', () => {
      let pp = new PaymentPackage('test', 15);
  
      expect(pp).to.have.property('VAT', 20);
    });
    it('VAT getter should return correct value', () => {
      let pp = new PaymentPackage('test', 15);
      
      expect(pp.VAT).to.be.equal(20);
    });
  
    it('VAT setter should set correct value', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 23;
      pp.VAT = 23;
      expect(pp.VAT).to.be.equal(expected);
    });
  
    it('VAT setter should work correctly when is given a zero as value', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = 0;
      pp.VAT = expected;
      expect(pp.VAT).to.be.equal(expected);
    });
  
    it('VAT setter should throws exception when give parameter is not a number', () => {
      let pp = new PaymentPackage('test', 15);
      
      let actual = () => {pp.VAT = 'test'};
      expect(actual).to.throw(Error, 'VAT must be a non-negative number');
    });
  
    it('VAT setter should throws exception when give parameter is number as string', () => {
      let pp = new PaymentPackage('test', 15);
      
      let actual = () => {pp.VAT = '15'};
      expect(actual).to.throw(Error, 'VAT must be a non-negative number');
    });
  
    it('VAT setter should throws exception when give parameter is a negative number', () => {
      let pp = new PaymentPackage('test', 15);
      
      let actual = () => {pp.VAT = -15};
      expect(actual).to.throw(Error, 'VAT must be a non-negative number');
    });
  
    it('An instance of class should set default value for property "active"', () => {
      let pp = new PaymentPackage('test', 15);
      let expected = true;
      expect(pp.active).to.be.equal(expected);
    });
  
    it('An instance of class should have inner property "_active"', () => {
      let pp = new PaymentPackage('test', 15);
      
      expect(pp).to.haveOwnProperty('_active', true);
    });
  
    it('An instance of class should have accessor property "active"', () => {
      let pp = new PaymentPackage('test', 15);
      
      expect(pp).to.have.property('active', true);
    });
  
    it('Getter for active should return correct value', () => {
      let pp = new PaymentPackage('test', 15);
      expect(pp.active).to.be.equal(true);
    });
  
    it('Setter for active should set correct value', () => {
      let pp = new PaymentPackage('test', 15);
      pp.active = false;
      expect(pp.active).to.be.equal(false);
    });
  
    it('Setter for active should throw exception when give parameter isn\'t boolean', () => {
      let pp = new PaymentPackage('test', 15);
      let actual = () => {pp.active = 'false'};
      expect(actual).to.throw(Error, 'Active status must be a boolean');
    });
  
    it('Setter for active should throw exception when give parameter isn\'t boolean', () => {
      let pp = new PaymentPackage('test', 15);
      let actual = () => {pp.active = 1234};
      expect(actual).to.throw(Error, 'Active status must be a boolean');
    });
  
    it('Setter for active should throw exception when give parameter isn\'t boolean', () => {
      let pp = new PaymentPackage('test', 15);
      let actual = () => {pp.active = 0};
      expect(actual).to.throw(Error, 'Active status must be a boolean');
    });
  
    it('Setter for active should throw exception when give parameter isn\'t boolean', () => {
      let pp = new PaymentPackage('test', 15);
      let actual = () => {pp.active = {}};
      expect(actual).to.throw(Error, 'Active status must be a boolean');
    });
  
    it('Setter for active should throw exception when give parameter isn\'t boolean', () => {
      let pp = new PaymentPackage('test', 15);
      let actual = () => {pp.active = [true, false]};
      expect(actual).to.throw(Error, 'Active status must be a boolean');
    });
  
    it('toString function in the class should return correct string format when active property is setted to true', () => {
      let pp = new PaymentPackage('test', 15);
      let resultTokens = [
        `Package: test`,
        `- Value (excl. VAT): 15`,
        `- Value (VAT 20%): ${15 * (1 + 20 / 100)}`
      ];
      let expected = resultTokens.join('\n');
  
      expect(pp.toString()).to.be.equal(expected);
    });
  
    it('toString function in the class should return correct string format when active property is setted to false', () => {
      let pp = new PaymentPackage('test', 15);
      pp.active = false;
      let resultTokens = [
        `Package: test (inactive)`,
        `- Value (excl. VAT): 15`,
        `- Value (VAT 20%): ${15 * (1 + 20 / 100)}`
      ];
      let expected = resultTokens.join('\n');
  
      expect(pp.toString()).to.be.equal(expected);
    });
  })