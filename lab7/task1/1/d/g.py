size = int(input())

arr = []
for i in range(size):
	a = int(input())
	arr.append(a)
new_arr = [i for i in range(size - 1 , -1 , -1)]
print(new_arr)