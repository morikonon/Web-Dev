let fruits = ["apple" , "banana" , "orange" , "strawberry"];
for(let i = 0;i < 4 ;++i){
	console.log(fruits[i]);
}

let a = 0;
while(a <= 5){
	console.log(a);
	++a;
}

fruits.forEach(function(fruit){
	console.log(fruit);
});