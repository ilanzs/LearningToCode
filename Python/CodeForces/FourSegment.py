# you get 4 lengths of lines
# you have to find the biggest area of a rectangle made with those lines

# <process the inputs>
numOfInp = int(input())
inputs = []
for i in range(numOfInp):
    inputs.append(input().split())

for i in range(len(inputs)):
    for j in range(len(inputs[i])):
        inputs[i][j] = int(inputs[i][j])
# </process the inputs>

for i in range(len(inputs)):
    inputs[i].sort()
    print(inputs[i][0] * inputs[i][2])
