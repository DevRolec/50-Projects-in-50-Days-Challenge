name = input("Enter Student Name: ").strip()

try: 
    score1 = float(input("Enter Score 1: "))
    score2 = float(input("Enter Score 2: "))
    score3 = float(input("Enter Score 3: "))

    scores = [score1, score2, score3]

    import math

    if not name or not all(
        math.isfinite(score) and 0 <= score <= 100
        for score in scores
    ):
        print("Invalid Student name or score. ")

    else: 
        average = sum(scores) / len(scores)

        if average >= 70:
            grade = "A"
        elif average >= 60:
            grade = "B"
        elif average >= 50:
            grade = "C"
        elif average >= 40:
            grade = "D"
        else:
            grade = "F"

        print(f"Student: {name}")
        print(f"Average: {average:.2f}")
        print(f"Grade: {grade}")

except ValueError:
    print("Please Enter Numeric Score.")