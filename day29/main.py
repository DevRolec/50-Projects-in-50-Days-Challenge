#To define Functions in Python we use "def" keyword.

def greet():
    print("Welcome to Python Functions. ")

greet()

def add_numbers():
    a = 100
    b = 180

    result = a + b

    print(result)

add_numbers()

#Passing Parameters

def greet_student(name):
    print("Hello", name)

greet_student("Michael")
greet_student("Angel")

def multiply(a , b):
    print(a * b)

multiply(3, 5)
multiply(12345, 6789)

def calculate_area(length, width):
    return length * width
area = calculate_area(12, 4)

print("Area: ", area)

#Python lambda functions.Lambda is a small
#  anonymous fx with a single expression.
#def square(number):
#    return number * number

square = lambda number: number * number
print(square(6))

multiply = lambda a, b: a * b
print(multiply(5, 4))

def cube(n):
    return n ** 3

print(cube(3))
#Parameters and Arguments:
def student_details (name, age, course):
    print(name, age, course)

student_details("Mercy", 19, "Software Engineering")

def welcome(name = " Student"):
    print("Welcome ", name)

welcome()

#Keyword arguments in Python.

def register_student(name, age, course):
    print(name, age, course)

register_student(
    course="Cyber Security",
    name="Grace Okaro",
    age=20
)
