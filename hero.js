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
        return this.attributes.health;
    },
    attack: function(baddie) {
        return baddie.defend(this.attributes.attackValue);
    },
    defend: function( attackValue ) {
        var rnd = Math.floor(Math.random() * 10);
        // console.log("RND:" + rnd);
        if (rnd < 3) {
            var damage = (this.attributes.defendValue - attackValue);
            // console.log("DMG: " + damage);
            // if (damage > 0) {
                this.attributes.health += damage;
                return damage;
            // }
        }
        return 0;
    }
};

module.exports = Hero;