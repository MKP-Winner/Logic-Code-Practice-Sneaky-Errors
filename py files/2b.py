# 2b: Write a program in JS that prints numbers from 1 to 5 using a while loop.

def print_numbers_while_loop():
    print("Numbers from 1 to 5:")
    i = 1
    while i <= 5:
        print(i, end=" ")
        i += 1
    print()

if __name__ == "__main__":
    print_numbers_while_loop()