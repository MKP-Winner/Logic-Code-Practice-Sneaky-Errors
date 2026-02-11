# 4b: Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

def display_student_grades():
    students = {
        "Mithun": 95,
        "Elnatan": 87,
        "Mr. Gardner": 92,
        "Kshetra": 88,
        "Alex": 91
    }
    
    print("Student Grades:")
    for name, grade in students.items():
        print(f"{name}: {grade}")

if __name__ == "__main__":
    display_student_grades()