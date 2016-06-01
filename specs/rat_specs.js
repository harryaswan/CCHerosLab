var assert = require('chai').assert;
// var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe('Rat', function() {
    beforeEach(function() {
        rat = new Rat();
        apple = new Food("Apple", 10);
    });
    it('can poison food', function() {
        rat.touch(apple);
        assert.equal(-10, apple.replen);
    });

});
