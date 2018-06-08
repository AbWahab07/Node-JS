var firstDie = 5;
var secondDie = 3;

/*
var value = 6 * Math.random();
var roll = Math.ceil(value);
console.log(roll);
*/
//console.log(Math.ceil(6*Math.random()));

firstDie = Math.ceil(6*Math.random());
secondDie = Math.ceil(6*Math.random());

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

/* You Try */
/*
firstDie = Math.ceil(6)*Math.random());           //  Unexpected token )
secondDie = Math.ceil(6*Math.random();            //   missing ) after argument list

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);
*/

/* Declaration */
console.log('Declaration Example');
var getDieRoll = function () {
  console.log('Rolling a Die ');
  return Math.ceil(6*Math.random());
};

firstDie = getDieRoll();
console.log(firstDie);

secondDie = getDieRoll();
console.log(secondDie);

console.log(firstDie + secondDie);


/* Parameters */
console.log('Parameters Example');
var getDieRoll = function (dieSize) {
  console.log(dieSize);
  return Math.ceil(dieSize*Math.random());
}

var showResult = function () {
  console.log(firstDie);
  console.log(secondDie);
  console.log(firstDie + secondDie);
};
firstDie = getDieRoll(9);
secondDie = getDieRoll(7);
showResult();
