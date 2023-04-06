class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  present() {
    const index = this.attendance.findIndex((present) => present === null);
    if (index !== -1) {
      this.attendance[index] = true;
      console.log(`Recorded as present on lesson ${index + 1}`);
    } else {
      console.log("Cannot mark attendance, all lessons are already marked");
    }
  }

  absent() {
    const index = this.attendance.findIndex((present) => present === null);
    if (index !== -1) {
      this.attendance[index] = false;
      console.log(`Recorded as absent on lesson ${index + 1}`);
    } else {
      console.log("Cannot mark attendance, all lessons are already marked");
    }
  }

  get averageGrade() {
    if (this.grades.length === 0) {
      return null;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  get attendancePercentage() {
    const count = this.attendance.filter((present) => present === true).length;
    return count / this.attendance.length;
  }

  summary() {
    const avgGrade = this.averageGrade;
    const attendancePercentage = this.attendancePercentage;
    if (avgGrade >= 90 && attendancePercentage >= 0.9) {
      return "Молодець!";
    } else if (avgGrade >= 90 || attendancePercentage >= 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

function showStudent() {
  const student1 = new Student("Io", "Wisp", 2002);

  student1.present();
  student1.absent();
  student1.present();

  student1.grades = [80, 90, 95];
  console.log(student1.averageGrade);

  student1.attendance = new Array(25).fill(true);
  console.log(student1.attendancePercentage);

  console.log(student1.summary());

  console.log(student1.age);
}

showStudent();
