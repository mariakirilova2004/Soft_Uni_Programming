const assert = require('chai').assert;
const companyAdministration = require('./companyAdministration');

describe("Test companyAdministration", function() {
    describe("Test hiringEmployee", function() {
        it("If position is not Programmer", function() {
            assert.throws(() => companyAdministration.hiringEmployee('Pesho', 'Cooker', 4), Error, 'We are not looking for workers for this position.');
        });
        it("If position is  Programmer but yearsExperience lesser than 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2), 'Pesho is not approved for this position.');
        });
        it("If position is  Programmer and yearsExperience equal to 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3), 'Pesho was successfully hired for the position Programmer.');
        });
        it("If position is  Programmer and yearsExperience bigger than 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4), 'Pesho was successfully hired for the position Programmer.');
        });
    });
    describe("Test calculateSalary", function() {
        it("If hours is not number", function() {
            assert.throws(() => companyAdministration.calculateSalary('Pesho'), Error, 'Invalid hours');
        });
        it("If hours are negative number", function() {
            assert.throws(() => companyAdministration.calculateSalary(-2), Error, 'Invalid hours');
        });
        it("If hours is  number and hours bigger than 161", function() {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
        it("If hours is  number and hours less than 160", function() {
            assert.equal(companyAdministration.calculateSalary(4), 60);
        });
    });
    describe("Test firedEmployee", function() {
        it("If employees is not array", function() {
            assert.throws(() => companyAdministration.firedEmployee("Petar", 2), Error, 'Invalid input');
        });
        it("If index is not number", function() {
            assert.throws(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '2'), Error, 'Invalid input');
        });
        it("If index is negative number", function() {
            assert.throws(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), Error, 'Invalid input');
        });
        it("If index is too big number", function() {
            assert.throws(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3), Error, 'Invalid input');
        });
        it("If employees are array and index is valid", function() {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2), 'Petar, Ivan');
        });
        it("If employees are array and index is valid", function() {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), 'Petar, George');
        });
        it("If employees are array and index is valid", function() {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0), 'Ivan, George');
        });
    });
});
