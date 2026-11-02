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
