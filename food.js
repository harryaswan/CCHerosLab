var Food = function( name, replen ) {
    this.name = name;
    this.replen = replen;
    this.poisoned = false;
};

Food.prototype = {
    poison: function() {
        // this.poisoned = true;
        if ( this.replen > 0 ) {
            this.replen = -1 * this.replen;
        }
    }
};

module.exports = Food;