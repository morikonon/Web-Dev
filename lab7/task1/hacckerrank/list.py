command = ""
main_list = []
while(command != "exit"):
	command = str(input("Write you command : "))
	if command == "append" :
		num = float(input("Write you number : "))
		main_list.append(num)
	if command == "insert":
		index = int(input("Write you index : "))
		number = int(input("Write you number : "))
		main_list.insert(index , number)
print(main_list)

