'''
sample inputs:
    3
    1 1 0
    1 1 1
    1 0 0

sample output:
    2
'''

output = 0
inputs = []
n = int(input())
for i in range(n):
    inputs.append(input())

for nums in inputs:
    ones = 0
    for i in range(len(nums)):
        if nums[i] == "1":
            ones += 1
    if ones >= 2:
        output += 1
print(output)
