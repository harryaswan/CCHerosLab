var Baddie = function( personAttributes ) {
    this.attributes = personAttributes;
};

Baddie.prototype = {
    attack: function(hero) {
        return hero.defend(this.attributes.attackValue);
    },
    defend: function( attackValue ) {
        var rnd = Math.floor(Math.random() * 10);
        if (rnd < 7) {
            var damage = (this.attributes.defendValue - attackValue);
            if (damage > 0) {
                this.attributes.health -= damage;
                return damage;
            }
        }
        return 0;
    }
};

module.exports = Baddie;