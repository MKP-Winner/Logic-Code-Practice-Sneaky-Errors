# 3a: Write a function in Python that greets a user by name.

def greet_user(name):
    """Greets a user by their name"""
    print(f"Hello, {name}! Welcome!")

if __name__ == "__main__":
    user_name = input("Enter your name: ")
    greet_user(user_name)