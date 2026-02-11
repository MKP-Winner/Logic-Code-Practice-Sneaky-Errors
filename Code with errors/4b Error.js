// 4b. Write a program in JS that stores student names and their grades in a dictionary, and prints each student's name and grade.

function displayStudentGrades() {
    const students = {
        "Mithun": 95,
        "Elnatan": 94,
        "Mr. Gardner": 92,
        "Kshetra": 99,
        "Alex": 89
    };
    
    console.log("Student Grades:");

    for (let name in students) {
        console.log(name);  // Logical error: grade not displayed
    }
}

displayStudentGrades();
