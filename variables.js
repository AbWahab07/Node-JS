var x = 3,
    y = 5;
var z = '3';
var type = typeof 5; // Number
type = typeof 'a'; // String
type = typeof ( x > y); // Boolean
type = typeof console; // Object
type = typeof console.log; // Function
console.log(type);

var result = x + y;
console.log(typeof result); // Number

var answer = x + z; // JS assumes String concatenation
console.log(typeof answer); // String

answer = x * z; // JS knows you can't multiply a string so it converts string to number
console.log(answer); // 9
console.log(typeof answer); // Number

var test = 'Hello' + ' Hello';
console.log(test); // Hello Hello
console.log(typeof test); // String

test = '2.5' * '3.5'; // JS knows you can't multiply two strings so it converts string to number
console.log(test); // 8.75
console.log(typeof test); // Number

test = 'Hello' * ' Hello';
console.log('Test value ' + test); // NaN
console.log('Test Type ' + typeof test); // Number

answer = x + parseInt(z); // parseInt converts String to number
console.log(answer); // 6
console.log(typeof answer); // Number

var greeting = function (name) {
  var message = "Hello, " + name;
  console.log(message);
};

greeting("Abdul"); // Hello, Abdul
//greeting(true); // Hello, true
//greeting(false); // Hello false

/* Try This */
//console.log(x()); // Type Error, X is not a Function


/*
console.log(x);
console.log(y);
console.log(typeof x);
console.log(type);
console.log(typeof z);
console.log(typeof console);
*/
