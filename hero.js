var Hero = function( personAttributes ) {
    this.attributes = personAttributes;
    this.special = null;
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
        var attackValue = Math.floor(Math.random() * this.attributes.attackValue) + 1;
        if (this.special) {
            attackValue *= this.special.attackMulti;
        }
        return baddie.defend(attackValue);
    },
    defend: function( attackValue ) {
        var rnd = Math.floor(Math.random() * 10);
        // console.log("RND:" + rnd);
        if (rnd < 5) {
            var defendValue = Math.floor(Math.random() * this.attributes.defendValue) + 1;
            if (this.special) {
                defendValue *= this.special.defenceMulti;
            }
            var damage = (defendValue - attackValue);
            if (damage < 0) {
                damage *= -1;
            }
            // console.log("DMG: " + damage);
            // if (damage > 0) {
            this.attributes.health -= damage;
            this.attributes.health = Math.round(this.attributes.health);
            return damage;
            // }
        }
        return 0;
    }
};

module.exports = Hero;