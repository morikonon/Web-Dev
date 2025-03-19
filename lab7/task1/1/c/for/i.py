a = int(input())
counter = 0

for i in range(1 , a+1 , 1):
	if(a % i == 0):
		counter+=1
print(counter)