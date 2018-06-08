var getDieRoll = function (dieSize) {
  var result = Math.ceil(dieSize*Math.random());
  return result;
}

var roll = getDieRoll(6);
/*
if (roll == 6) {
  console.log('Great Roll!');
}
else if (roll == 1) {
  console.log('Terrible Roll');
}
else {
  console.log('You rolled an Ok Roll');
}
console.log('You rolled ' + roll);

console.log('Second Check');
if (roll == 1 || roll == 3 || roll == 5){
  console.log('Great Roll');
}
else if (roll == 2 ){
  console.log('Terrible Roll');
}
else {
  console.log('That was an Ok roll');
}
*/
for (var i = 0; i < 10; i++) {
    roll = getDieRoll(6);
    //console.log(roll);
    if (roll >= 4) {
      console.log('*');
    }
    else {
      console.log('-');
    }
}
for (var i = 0; i < process.argv.length; i++) {
  console.log(i);
  console.log(process.argv[i]);
}
