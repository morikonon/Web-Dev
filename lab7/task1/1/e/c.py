a = int(input())
b = int(input())

def get_OR(a , b):
	if(a == 1):
		return True
	if(b == 1):
		return True
	return False
result = get_OR(a , b)
print(result)