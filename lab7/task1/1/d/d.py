size = int(input())

counter = 0

arr = []
for i in range(size):
	a = int(input())
for i in range(size - 1):
	if(arr[i] < arr[i+1]):
		counter += 1

print(counter)