const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length >= 6 && studentName !== "Queen" ) {
        console.log("Cannot add more students to class 07");
        if (studentName === "Queen" && class07Students.length === 6 && class07Students.includes("Queen")===false) {
            class07Students.push("Queen");
        }
    }
    else if (class07Students.includes(studentName)===true) {
        console.log(`Student ${studentName} is already in the class`);
    }
    else {
    class07Students.push(studentName);
    }
}
function getNumberOfStudents() {
    return class07Students.length;
    }

addStudentToClass("Esmat");
addStudentToClass("Raman");
addStudentToClass("Ahmed");
console.log(class07Students);
addStudentToClass("Sami");
addStudentToClass("Ahmed");
addStudentToClass("Dima");
console.log(class07Students);
addStudentToClass("Dimetric");
console.log(class07Students);
addStudentToClass("Rene");
console.log(class07Students);
addStudentToClass("King");
console.log(class07Students);
console.log(getNumberOfStudents());