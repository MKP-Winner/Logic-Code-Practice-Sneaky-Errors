# 2c. Write a program in Python that calculates the factorial of a given number using a loop.

def calculate_factorial():
    number = int(input("Enter a number to calculate its factorial: "))
    
    if number < 0:
        print("Factorial is not defined for negative numbers")
        return
    
    factorial = 1
    for i in range(1, number):  # Logical error: should go to number + 1
        factorial *= i
    
    print(f"The factorial of {number} is {factorial}")

if __name__ == "__main__":
    calculate_factorial()
