#BOOLEANS A data type with only 2 possible values
#True or False in Python or true or false in Js

is_registered = True
has_paid = False

print(type(has_paid))
#Comparison Produces Boolean results.

#>, <, >=, <=, ===(Js), !==(Js),  ==(Equality in Python... Loose equality in JS)
#!= (Inequality in Python...  loose inequality in JS)

age = 27
is_adult = age >= 18
print(is_adult)

#LOGICAL OPERATORS --- They combine conditions.
# |AND| OR | NOT
age = 10
has_paid = True

if age >= 18 and has_paid: 
    print("Access Granted...")
else:
    print("Access Denied")

    #*******************************
age_text = "20"

age_number = int(age_text)

print(age_number)
print(type(age_text))

print("10" + 5)

