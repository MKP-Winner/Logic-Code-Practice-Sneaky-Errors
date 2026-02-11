# 4a: Write a program in Python that stores a list of fruits and prints each fruit using a loop.

def display_fruits():
    fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"]
    
    print("List of fruits:")
    for fruit in fruits:
        print(f"- {fruit}")

if __name__ == "__main__":
    display_fruits()