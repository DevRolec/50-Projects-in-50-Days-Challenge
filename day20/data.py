age = 20
age_text = "20"

print(type(age))
print(type(age_text))

#STRINGS
name_1 = 'Roland' #Single Quotes
name_2 = "Rowland" #Double Quotes
name_3 = f"Rolland" #Formatted Strings

#CONCATENATIONS
first_name = "David"
last_name = "Okafor"

full_name = first_name + " " + last_name

print(full_name)

name = "Donald"
age = 21

print(f"My name is {name} and I am {age} years old.")

student_name = "jennifer"
print(len(student_name))
print(student_name.strip())
print(student_name.upper())
print(student_name.strip().upper())

#STRINGS ARE IMMUTABLE...
language = "Python"

#language[0] ="J"

language = "J" + language[1:]

print(language)


# - Student Username Generator..
#1. Store a Students full name.
#2. Remove spaces at the beginning and end
#3. Convert the name to upper and lowe cases
#4. Replace spaces with Underscores_
#5. Display the resulting Username

