a = int(input())
b = int(input())
c = int(input())
d = int(input())

arr = [i for i in range(a,b)]
r = [m for m in arr if m % d == 0]
print(*r)