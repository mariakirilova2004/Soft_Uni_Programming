let { Repository } = require("./solution.js");
let assert = require('chai').assert;

describe("Tests for Repository", function () {
    describe("Constructor", function () {
        it("If props is valid", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let rep = new Repository(properties);
            assert.deepEqual(rep.props, properties);
        });

        it("If id is not accessable", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let rep = new Repository(properties);
            assert.equal(rep.id, undefined);
        });

        it("If next id is working properly increase with one", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let rep = new Repository(properties);
            assert.equal(rep.nextId(), 0);
            assert.equal(rep.nextId(), 1);
        });
    });
    describe("Add()", function () {
        it("If add entity in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            let rez = rep.add(entity)
            assert.equal(rez, 0);
        });
    });
    describe("getId()", function () {
        it("If getId works in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            let id = rep.add(entity);
            let rez = rep.getId(id);
            assert.deepEqual(rez, entity);
        });
        it("If getId throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            rep.add(entity);
            assert.throws(() => rep.getId(2), Error, 'Entity with id: 2 does not exist!');
        });
    });
    describe("del(id)", function () {
        it("If del works in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            let id = rep.add(entity);
            rep.del(id);
            assert.equal(rep.count, 0);
        });
        it("If del throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            let id = rep.add(entity);
            assert.throws(() => rep.del(2), Error, 'Entity with id: 2 does not exist!');
        });
    });
    describe("update(id)", function () {
        it("If update works in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newentity = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            rep.add(entity);
            rep.update(0, newentity);
            assert.deepEqual(rep.getId(0), newentity);
        });
        it("If update throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            rep.add(entity);
            assert.throws(() => rep.update(1), Error, `Entity with id: 1 does not exist!`);
        });
    });
    describe("_validate(id)", function () {
        it("If _validate age throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                //age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            assert.throws(() => rep.add(entity), Error, `Property age is missing from the entity!`);
        });
        it("If _validate age throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            assert.throws(() => rep.add(entity), Error, `Property age is not of correct type!`);
        });
        it("If _validate name throw error in the data set", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                //name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            assert.throws(() => rep.add(entity), Error, `Property name is missing from the entity!`);
        });
        it("If _validate name throw error in the data set", function () {
            let properties = {
                name: 30,
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            assert.throws(() => rep.add(entity), Error, `Property name is not of correct type!`);
        });
    });
    describe("count", function () {
        it("If count return count of the data set after adding", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            assert.equal(rep.count, 0);
            rep.add(entity);
            assert.equal(rep.count, 1);
        });
        it("If count return count of the data set after removing", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let rep = new Repository(properties);
            rep.add(entity);
            assert.equal(rep.count, 1);
            rep.del(0);
            assert.equal(rep.count, 0);
        });
    });
});
