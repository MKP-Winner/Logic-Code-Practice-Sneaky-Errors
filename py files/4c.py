# 4c: Create an array of numbers in Python and write a function to find the highest number in the array.

def find_highest_number(numbers):
    """Returns the highest number in a list"""
    if not numbers:
        return None
    
    highest = numbers[0]
    for num in numbers:
        if num > highest:
            highest = num
    
    return highest

if __name__ == "__main__":
    number_array = [23, 67, 12, 89, 45, 34, 91, 56]
    
    print(f"Numbers: {number_array}")
    highest = find_highest_number(number_array)
    print(f"The highest number is: {highest}")