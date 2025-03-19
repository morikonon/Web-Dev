from math import sqrt
a = int(input())
index = 1
while(index <= a):
	if(int(int(sqrt(index)) * int(sqrt(index))) == index):
		print(index)
	index += 1