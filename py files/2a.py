# 2a: Write a program in Python that prints numbers from 1 to 10 using a for loop.

def print_numbers_for_loop():
    print("Numbers from 1 to 10:")
    for i in range(1, 11):
        print(i, end=" ")
    print()

if __name__ == "__main__":
    print_numbers_for_loop()