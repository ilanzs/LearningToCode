t = int(input())

inputs = []
for i in range(t):
    inputs.append(input().split())

for nums in inputs:
    a = int(nums[0])
    b = int(nums[1])
    c = int(nums[2])

    circle_size = abs(a - b) * 2
    half_circle_size = circle_size / 2

    output = abs(half_circle_size + c) % circle_size

    if output == 0:
        output = circle_size

    if a > circle_size or b > circle_size or c > circle_size:
        print(-1)
    else:
        print(int(output))
