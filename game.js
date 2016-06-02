var chalk = require('chalk');

var Hero = require('./hero.js');
var Food = require('./food.js');
var Rat = require('./rat.js');

var PersonAttibutes = require('./person.js');
var Special = require('./special.js');

var foodItems = [new Food("Cookie", 10), new Food("Toast", 10), new Food("Pizza", 20), new Food("Chocolate", 5), new Food("Crisps", 10), new Food("Apple", 25), new Food("Bannana", 10)];
var specialAbilities = [new Special("Double the Swords", 2, 1), new Special("Double the Guards", 1, 2), new Special("Nothing at all", 1, 1), new Special("Proper Weakling", 0.1, 0.1), new Special("Super Everything", 3, 3)];
var mrRat = new Rat();

var heroAtts = new PersonAttibutes("Sir Scaredalot", "Cookie", 20, 10);
var baddieAtts = new PersonAttibutes("Mr Black", "Toast", 20, 10);

var hero = new Hero(heroAtts);
var baddie = new Hero(baddieAtts);

var herosTurn = true;
var run = true;
// var readyToPlay = false;


var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    //console.log("you entered: [" + d.toString().trim() + "]");
    var input = d.toString().trim();

    if (run) {
        if (input.indexOf("continue") > -1) {
            var number = 500;
            if (input.indexOf(" ") > -1) {
                var split = input.split(" ");
                number = parseInt(split[1]);
                console.log("myNum: " + (number+1));
            }
            autoPlay(number);
        } else {
            takeTurn();
            checkWin();
        }
    } else {
        process.exit(0);
    }

  });

function checkWin() {
    if (hero.attributes.health > 0 && baddie.attributes.health <= 0) {
        console.log(chalk.underline.bold.green("The Hero, " + hero.attributes.name + " Won!"));
        run = false;
    } else if (hero.attributes.health <= 0 && baddie.attributes.health > 0) {
        console.log(chalk.underline.bold.red("The Baddie, " + baddie.attributes.name + " Won!"));
        run = false;
    } else {
        console.log("Next turn....\n");
    }
}

<<<<<<< HEAD
if (hero.attributes.health > 0 && baddie.attributes.health <= 0) {
    console.log("The Hero, " + hero.attributes.name + ", Won!");
} else if (hero.attributes.health <= 0 && baddie.attributes.health > 0) {
    console.log("The Baddie, " + baddie.attributes.name + ", Won!");
=======
function autoPlay(num) {
    if (run) {
        takeTurn();
        checkWin();
    } else {
        process.exit(0);
    }
    setTimeout(function() {autoPlay(num);}, num);
>>>>>>> c6068bd4ca4e35e9197426261b621e45f90d6b97
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
    if (player1.attributes.health < 30){
        if (foodItems.length > 0) {
            var rnd = Math.floor(Math.random() * 10);
            var randFood;
            if (rnd > 6) {
                randFood = foodItems[Math.floor(Math.random() * foodItems.length)];
                mrRat.touch(randFood);
            }
            randFood = foodItems[Math.floor(Math.random() * foodItems.length)];
            var oldHealth = player1.attributes.health;
            var newHealth = player1.eat(randFood);
            if (oldHealth > newHealth) {
                console.log(chalk.cyan(player1.attributes.name + " was "+chalk.red("poisoned!") + " His new health is now ") + chalk.red(newHealth));
            } else {
                console.log(chalk.cyan(player1.attributes.name + " ate " + randFood.name + ", his new health is ") + chalk.green(newHealth));
            }
            foodItems.splice(foodItems.indexOf(randFood), 1);
        }
    }


    if (player1.attributes.health > 0) {

        if (player2.attributes.health > 0) {
            var random = Math.floor(Math.random() * 100) + 1;

            if (random < 30) {
                player1.special = specialAbilities[Math.floor(Math.random() * specialAbilities.length)];
                console.log(chalk.yellow(player1.attributes.name + " gain the new special ability of " + player1.special.toString()));
            // } else {
            //     player1.special = null;
            //     console.log(chalk.yellow(player1.attributes.name + " lost their special abilities"));
            }
        }

        var damageHitWith = player1.attack(player2);
        if (damageHitWith === 0) {
            console.log(chalk.grey(player1.attributes.name + " failed to hit " + player2.attributes.name));
        }else {
            console.log(chalk.yellow(player1.attributes.name + " hit " + player2.attributes.name + " with " + chalk.red(damageHitWith) + " force!"));
            console.log(chalk.magenta(player2.attributes.name + "'s health is now ") + chalk.green(player2.attributes.health));

        }
    }
    herosTurn = !herosTurn;
<<<<<<< HEAD
    run = true;
}
=======
}

console.log(chalk.blue("Press enter to play >"));


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
>>>>>>> c6068bd4ca4e35e9197426261b621e45f90d6b97
