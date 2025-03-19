size = int(input())

counter = 0

arr = []
for i in range(size):
	a = int(input())
	arr.append(a)
for i in range(1 , size - 1 ):
	if(arr[i - 1] < arr[i] and arr[i] > arr[i+1]):
		counter += 1

print(counter)
