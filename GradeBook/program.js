/* Combinig all the concepts and writing a compact program */
var book = require('./lib/grades.js');
book = book.book; /* Notice I've used the same variable name and it worked correctly.*/
/* Or */
book = require('./lib/grades.js').book;
//console.log(book);

/*
for (var i = 2; i < process.argv.length; i++) {
  book.addGrade(parseInt(process.argv[i]));
}
console.log(book.getAverage());
*/
var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/grades', function (req, res) {
    //
    var grades = req.query.grades.split(',');
    for (var i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    var avg = book.getAverage();
    var grade = book.computeGrade();
    res.send("Your Average is " + avg + " grade " + grade);
});

app.listen(3000);
console.log("Server ready ...");
