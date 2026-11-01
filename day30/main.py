#Arguments and Parameters...
def add_all(*numbers):
    total = 0

    for number in numbers:
        total += number

    return total

print(add_all(2,3,4,4,5,6,7,8))
#::::::::::::::::::::::::::::::::::::::::::::::::::
def check_even_number(number):
   if number % 2 == 0:
       return "Even"
   else:
         return "The number is 😎"


print(check_even_number(19))
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
def get_grades(score):
 if score >= 70:
    return "A"
 elif score >= 60:
     return "B"
 elif score >= 50:
     return "C"
 elif score >= 40:
     return "D"
 else:
     return 'F'

print(get_grades(39))
print(get_grades(49))
print(get_grades(59))
print(get_grades(69))
print(get_grades(36))
print(get_grades(54))
print(get_grades(88))
print(get_grades(74))
print(get_grades(56))
#FUNCTIONS AND LOOPS
def multiplication_table(number):
    for i in range(1, 13):
        print(f"{number} x {i} = {number * i}")

multiplication_table(578)
