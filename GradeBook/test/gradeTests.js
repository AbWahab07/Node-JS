var book = require('../lib/grades').book;

exports["setUp"] = function (callback) {
  book.reset();
  callback();
}

exports["Can compute grade A"] = function (test) {
  book.addGrade(100);
  book.addGrade(90);
  var grade = book.computeGrade();
  test.equals(grade, 'A');
  test.done();
}

exports["Can add a new grade"] = function (test) {
  book.addGrade(90);
  book.addGrade(80);
  var count = book.getCountOfGrades();
  test.equals(count, 2);
  test.done();
};

exports["Can average Tests"] = function (test) {
  book.addGrade(90);
  book.addGrade(80);
  var average = book.getAverage();
  test.equals(average, 85);
  test.done();
}
