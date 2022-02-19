const assert = require('chai').assert;
const flowerShop = require('./flowerShop.js');

describe("Tests flowerShop", function() {
    describe("Test calcPriceOfFlowers", function() {
        it("If flower is not string", function() {
            assert.throws(() => flowerShop.calcPriceOfFlowers(3, 12, 4), Error, 'Invalid input!');
        });
        it("If price is not int", function() {
            assert.throws(() => flowerShop.calcPriceOfFlowers('cvete', '12', 4), Error, 'Invalid input!');
        });
        it("If quantity is not int", function() {
            assert.throws(() => flowerShop.calcPriceOfFlowers('cvete', 12, '4'), Error, 'Invalid input!');
        });
        it("If everything is correct", function() {
            let ans = flowerShop.calcPriceOfFlowers('Margaritki', 12, 4);
            assert.equal(ans, `You need $48.00 to buy Margaritki!`);
        });
     });
     describe("Test checkFlowersAvailable", function() {
        it("If flower is present", function() {
            let ans = flowerShop.checkFlowersAvailable('Margaritki', ["Rose", "Lily", "Orchid"]);
            assert.equal(ans, `The Margaritki are sold! You need to purchase more!`);
        });
        it("If price is not present", function() {
            let ans = flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]);
            assert.equal(ans, `The Lily are available!`);
        });
     });
     describe("Test sellFlowers", function() {
        it("If gardenArr is not array", function() {
            assert.throws(() => flowerShop.sellFlowers("Rose", 0), Error, 'Invalid input!');
        });
        it("If space is not int", function() {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2'), Error, 'Invalid input!');
        });
        it("If everything is correct", function() {
            let ans = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2);
            assert.equal(ans, `Rose / Lily`);
        });
        it("If everything is correct", function() {
            let ans = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0);
            assert.equal(ans, `Lily / Orchid`);
        });
     });
});
