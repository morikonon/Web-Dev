from math import sqrt
n = int(input())
index = 1
while(index <= n):
	if(sqrt(index) * sqrt(index) == index):
		print(index)
	index+=1