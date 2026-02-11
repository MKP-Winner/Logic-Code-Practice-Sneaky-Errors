# 3c: Write a function in Python that accepts a string and returns the number of vowels in the string

def count_vowels(text):
    """Returns the number of vowels in a string"""
    vowels = "aeiouAEIOU"
    count = 0
    
    for char in text:
        if char in vowels:
            count += 1
    
    return count

if __name__ == "__main__":
    user_input = input("Enter a string: ")
    vowel_count = count_vowels(user_input)
    print(f"The string '{user_input}' contains {vowel_count} vowels")