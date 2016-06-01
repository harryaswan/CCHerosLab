var Hero = function( personAttributes ) {
    this.attributes = personAttributes;
};

Hero.prototype = {
    talk: function() {
        return "Hello, my name is " + this.attributes.name;
    },
    eat: function( food ) {
        if( food.name === this.attributes.favFood ) {
            this.attributes.health += (1.5 * food.replen);
        } else {
            this.attributes.health += food.replen;
        }
        food = null;
    },
    attack: function(baddie) {
        baddie.defend(this.attributes.attackValue);
    },
    defend: function( attackValue ) {
        var rnd = Math.floor(Math.random() * 10);
        if (rnd < 5) {
            var damage = (this.attributes.defendValue - attackValue);
            if (damage > 0) {
                this.attributes.health -= damage;
            }
        }
    }
};

module.exports = Hero;
