var Hero = require('./hero.js');
var Food = require('./food.js');
var Rat = require('./rat.js');
var PersonAttibutes = require('./person.js');

var heroAtts = new PersonAttibutes("Sir Scaredalot", "Cookie", 20, 10);
var baddieAtts = new PersonAttibutes("Mr Black", "Toast", 20, 10);
var foodItems = [new Food("Cookie", 10), new Food("Toast", 10), new Food("Pizza", 20), new Food("Chocolate", 5), new Food("Crisps", 10)];
var hero = new Hero(heroAtts);
var baddie = new Hero(baddieAtts);
var mrRat = new Rat();

var herosTurn = true;
var run = true;

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    //console.log("you entered: [" + d.toString().trim() + "]");
    if (run) {
        takeTurn();
        checkWin();
    } else {
        process.exit(0);
    }

  });

//
// while (hero.attributes.health > 0 && baddie.attributes.health > 0) {
//
//     var rnd = Math.floor(Math.random() * 10);
//
//     if (rnd > 5) {
//         var randFood = foodItems[Math.floor(Math.random() * foodItems.length)];
//         mrRat.touch(randFood);
//     }
//
//     // if(run){
//     //     setTimeout( takeTurn, 1000 );
//     //     run = false;
//     // }
//
//     takeTurn();
//     console.log("Next turn.....\n\n");
// }

function checkWin() {
    if (hero.attributes.health > 0 && baddie.attributes.health <= 0) {
        console.log("The Hero, " + hero.attributes.name + " Won!");
        run = false;
    } else if (hero.attributes.health <= 0 && baddie.attributes.health > 0) {
        console.log("The Baddie, " + baddie.attributes.name + " Won!");
        run = false;
    } else {
        console.log("Next turn....\n");
    }
}


function takeTurn() {
    var player1, player2;

    if (herosTurn) {
        player1 = hero;
        player2 = baddie;
    } else {
        player1 = baddie;
        player2 = hero;
    }

    console.log(player1.attributes.name + "'s turn...");
    if (player1.attributes.health < 50){
        if (foodItems.length > 0) {
            var randFood = foodItems[Math.floor(Math.random() * foodItems.length)];
            var oldHealth = player1.attributes.health;
            var newHealth = player1.eat(randFood);
            if (oldHealth > newHealth) {
                console.log(player1.attributes.name + " was poisoned! His new health is now " + newHealth);
            } else {
                console.log(player1.attributes.name + " ate " + randFood.name + ", his new health is " + newHealth);
            }
            foodItems.splice(foodItems.indexOf(randFood), 1);
        }
    }
    if (player1.attributes.health > 0) {
        var damageHitWith = player1.attack(player2);
        if (damageHitWith === 0) {
            console.log(player1.attributes.name + " failed to hit " + player2.attributes.name);
        }else {
            console.log(player1.attributes.name + " hit " + player2.attributes.name + " with " + damageHitWith + " force!");
            console.log(player2.attributes.name + "'s health is now " + player2.attributes.health);

        }
    }
    herosTurn = !herosTurn;
    // run = true;
}

console.log("Press enter to play >");
