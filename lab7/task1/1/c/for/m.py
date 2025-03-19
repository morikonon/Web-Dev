size = int(input())

counter = 0
for i in range(size):
	a = int(input())
	if(a / 10 > 0):
		counter+=1

print(counter)