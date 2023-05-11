class Student {
  constructor(name, rollNumber) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = {};
    this.grade = "";
  }

  addSubjectMarks(subject, marks) {
    this.marks[subject] = marks;
  }

  calculateGrade() {
    const totalMarks = Object.values(this.marks).reduce((sum, mark) => sum + mark, 0);
    const percentage = (totalMarks / Object.keys(this.marks).length).toFixed(2);

    if (percentage >= 90) {
      this.grade = "A+";
    } else if (percentage >= 80) {
      this.grade = "A";
    } else if (percentage >= 70) {
      this.grade = "B";
    } else if (percentage >= 60) {
      this.grade = "C";
    } else if (percentage >= 50) {
      this.grade = "D";
    } else {
      this.grade = "F";
    }
  }

  displayReport() {
    console.log("----- Student Report -----");
    console.log("Name:", this.name);
    console.log("Roll Number:", this.rollNumber);
    console.log("Marks:");
    for (const subject in this.marks) {
      console.log(subject + ":", this.marks[subject]);
    }
    console.log("Grade:", this.grade);
    console.log("--------------------------");
  }
}

// Example usage
const student1 = new Student("John Doe", "S001");
student1.addSubjectMarks("Math", 20);
student1.addSubjectMarks("English", 90);
student1.addSubjectMarks("Science", 80);
student1.calculateGrade();
student1.displayReport();
console.log(student1);
