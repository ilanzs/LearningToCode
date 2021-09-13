n = int(input())
inputs = input().split()
output = 0
for i in range(n):
    if i % 2 == 0:
        continue
    else:
        output += int(inputs[i]) - int(inputs[i - 1])

print(output)
