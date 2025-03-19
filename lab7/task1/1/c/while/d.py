from math import sqrt
a = int(input())

arr = [1]
index = 2
while(1000 >= index):
	arr.append(index)
	index = index * 2

if a in arr:
	print("Yes")
else:
	print("No") 