let salaries = {
	"John" : 5000,
	"Smith" : 1000,
	"Ashley" : 4000
}
let sum = 0;
for (i in salaries){
	sum += salaries[i];
}
console.log(sum);