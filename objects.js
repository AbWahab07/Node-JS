/*
var die = {
  size: 4,
  count: 1,
  roll: function (dieSize) {
    var result = Math.ceil(dieSize*Math.random());
    return result;
  }
};
*/

var die = {
  size: 6,
  totalRolls: 0,
  roll: function () {
    var result = Math.ceil(this.size*Math.random());
    this.totalRolls ++;
    console.log("This refers to: " + this);
    return result;
  }
};

console.log(die);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls: " + die.totalRolls);
/*
console.log(die.size);
die.size = 10;
console.log(die);
console.log(die.size);
*/
//console.log(die.roll(6));
