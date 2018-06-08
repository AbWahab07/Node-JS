/*
lunch = 'pizza'
console.log(lunch)
console.log(1)

var lunch = '12 inch pizza';
console.log(lunch);

var name = "Abdul";
console.log(name);
*/

/* Vid Check Plz

var totalCost = 14.99;
//console.log(process.argv);
var sizeOfParty = process.argv[2];
//console.log(sizeOfParty);
var averageCost = totalCost / sizeOfParty;
console.log("$" + averageCost);

*/

/* Usage of Require and exports */
var dice = require('./dice');
console.log(dice);
var die = dice.game;
console.log(die);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls: " + die.totalRolls);
