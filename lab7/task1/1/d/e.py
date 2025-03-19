size = int(input())

counter = 0

arr = []
for i in range(size):
	a = int(input())
for i in range(size - 1):
	if((arr[i]>=0 and arr[i+1] >=0) or (arr[i]>=0 and arr[i+1] >=0)):
		print("Yes")
print("No")