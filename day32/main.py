def factorial(n):
    if not isinstance(n, int) or n < 0:
        raise ValueError("Enter a non-negative number")

    if n == 0 or n ==1:
        return 1

    return n * factorial(n-1)

print(factorial(4))
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
def create_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment
counter = create_counter()

print(counter())
print(counter())
##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
def calculate_average(scores):
    if len(scores) == 0:
        return 0
    total = 0

    for score in scores:
        total += score

    return total / len(scores)

#Take care of Grades
def get_grade(score):
    if score >= 70:
        return "A"
    elif score >= 60:
        return "B"
    elif score >= 50:
        return "C"
    elif score >= 40:
        return "D"
    else:
        return "F"

    #Determine Pass of Fail:
def check_status(average):
    if average >= 50:
        return "PASS"
    else:
        return "FAILED"

def generate_report(name, scores):
    average = calculate_average(scores)
    grade = get_grade(average)
    status = check_status(average)

    print("STUDENT RESULT REPORT PAGE")
    print("----------------------------")
    print("Name :", name)
    print("Scores :", scores)
    print("Average :", f"Your average is {average:.2f}")
    print("Grade :", get_grade(average))
    print("Status :", status)


generate_report("Ada", [78, 98, 67, 90, 45, 65,89, 56, 38, 98, 67, 87, 41])



    


