var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');
var PersonAttibutes = require('../person.js');

describe('Hero', function() {
    beforeEach(function() {
        var atts = new PersonAttibutes('Sir Scaredalot', 'Cookie');
        hero = new Hero(atts);
    });
    it('Should have a name', function() {
        assert.equal('Sir Scaredalot', hero.attributes.name);
    });
    it('Should have a favourite Food', function() {
        assert.equal('Cookie', hero.attributes.favFood);
    });
    it('Should have 100% health', function() {
        assert.equal(100, hero.attributes.health);
    });
    it('Should be able to \'say\' their name', function() {
        assert.equal('Hello, my name is Sir Scaredalot', hero.talk());
    });

});

describe('Hero Eating', function() {
    beforeEach(function() {
        var atts = new PersonAttibutes('Sir Scaredalot', 'Cookie');
        hero = new Hero(atts);
        pizza = new Food("Pizza", 20);
        cookie = new Food("Cookie", 10);
        rat = new Rat();
    });
    it('Should increase health by replen value', function() {
        hero.attributes.health = 70;
        hero.eat(pizza);
        assert.equal(90, hero.attributes.health);
    });
    it('Should increase health by replen value + .5 if fav food', function() {
        hero.attributes.health = 70;
        hero.eat(cookie);
        assert.equal(85, hero.attributes.health);
    });
    it('Should lose health from eating poisoned food', function() {
        rat.touch(pizza);
        hero.eat(pizza);
        assert.equal(80, hero.attributes.health);
    });
    it('Should lose .5 more health from eating poisoned favourite food', function() {
        rat.touch(cookie);
        hero.eat(cookie);
        assert.equal(85, hero.attributes.health);
    });
});
