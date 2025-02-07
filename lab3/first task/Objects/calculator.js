let calculator = {
	sum(){
		return this.a + this.b;
	},
	mul(){
		return this.a * this.b;
	},
	read(){
		let a = prompt("First number ?" ,1);
		let b = prompt("Second number ?" , 2);
	}

};
calculator.read();
console.log(calculator.mul());
console.log(calculator.sum());