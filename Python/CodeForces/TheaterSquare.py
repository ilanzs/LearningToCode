# https://codeforces.com/problemset/problem/1/A

from math import ceil
inp = input().split()
n = int(inp[0])
m = int(inp[1])
a = int(inp[2])
print(ceil(m / a) * ceil(n / a))
