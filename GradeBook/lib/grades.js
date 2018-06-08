var gradeBook = {
  _grades: [],
  addGrade: function (newGrade) {
    this._grades.push(newGrade);
  },
  getCountOfGrades: function () {
    return this._grades.length;
  },
  getAverage: function () {
    var total = 0;
    for (var i = 0; i < this._grades.length; i++) {
      //console.log(this._grades[i]);
      total += this._grades[i];
    }
    //console.log(total);
    return (total/this.getCountOfGrades());
  },
  reset: function () {
    this._grades = [];
  },
  computeGrade: function () {
    var avg = this.getAverage();
    if (this.getAverage() >= 90) {
      return 'A';
    }
    else if (this.getAverage() >= 80) {
      return 'B';
    }
    else if (this.getAverage() >= 70) {
      return 'C';
    }
    else if (this.getAverage() >= 60) {
      return 'D';
    }
    else {
      return 'F';
    }

  }
};
/*
gradeBook.addGrade(90);
gradeBook.addGrade(80);
gradeBook.getAverage();
*/
exports.book = gradeBook;
