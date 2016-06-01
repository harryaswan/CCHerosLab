var assert = require('chai').assert;
// var Hero = require('../hero.js');
var Food = require('../food.js');
// var Rat = require('../rat.js');

describe('Food', function() {
    beforeEach(function() {
        pizza = new Food('Pizza', 20);
    });
    it('Should have a name', function() {
        assert.equal('Pizza', pizza.name);
    });
    it('Should have a replen value', function() {
        assert.equal(20, pizza.replen);
    });
});
