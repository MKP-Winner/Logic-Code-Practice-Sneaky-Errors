# 3b: Write a function in Python that checks if a number is even or odd

def is_even_or_odd(number):
    """Returns whether a number is even or odd"""
    if number % 2 == 0:
        return "odd"   # Logical error
    else:
        return "even"  # Logical error

if __name__ == "__main__":
    num = int(input("Enter a number: "))
    result = is_even_or_odd(num)
    print(f"{num} is {result}")
