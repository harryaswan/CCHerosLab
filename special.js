var Special = function(name, attackMulti, defenceMulti) {
    this.name = name;
    this.attackMulti = attackMulti;
    this.defenceMulti = defenceMulti;
};

Special.prototype = {
    toString: function() {
        return (this.name + "; AttackMultiplier = " + this.attackMulti + ", DefenceMultiplier = " + this.defenceMulti);
    }
};


module.exports = Special;
