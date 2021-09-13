# get inputs
numOfOperations = int(input())
operators = []
x = 0
for i in range(numOfOperations):
    operators.append(input())


# algorithm for the problem
for operator in operators:
    x = x + 1 if operator[1] == "+" else x - 1
    # solution for the problem is O(n)

# return the output
print(x)
