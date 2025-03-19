let array = ["apple" , "banana" , "watermalen"];
array.push("Cola");
console.log(array);

for(i in array){
	console.log(array[i]);
}

let size = prompt("What is the size of main array?" , 0);
let array2 = [];
for(i in Range(size)){
	let a = prompt("something" , 0);
	array2.push(a);
}
console.log(array2);