const user = {
	name:"John",
	address:{
		city:"New York"
	}
}
let city = user.address ? user.address.city : undefined;
console.log(city);

let user2 = {
	name:"Alice"
}
let city2 = user2?.address;
console.log(city2);

