var Rat = function() {

};

Rat.prototype = {
    touch: function( food ) {
        food.poison();
    }
};

module.exports = Rat;