// 4b. Write a program in JS that stores student names and their grades in a dictionary, and prints each student's name and grade.

function displayStudentGrades() {
    const students = {
        "Mithun": 95,
        "Elnatan": 87,
        "Mr. Gardner": 92,
        "Kshetra": 88,
        "Alex": 91
    };
    
    console.log("Student Grades:");
    // ERROR: Using 'student' in console.log but loop variable is 'name'
    for (let name in students) {
        console.log(`${student}: ${students[name]}`);
    }
}

displayStudentGrades();