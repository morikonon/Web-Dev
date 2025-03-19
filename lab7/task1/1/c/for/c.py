from math import sqrt
a = int(input())
b = int(input())

arr = [i for i in range(a , b) if i == sqrt(i) * sqrt(i)]
print(arr)


