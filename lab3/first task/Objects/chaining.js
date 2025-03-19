let leader = {
	step : 0,
	up(){
		step++;
		return this.step;	
	},
	down(){
		step--;
		return this.step;
	},
	showStep(){
		alert(this.step);
		return this;
	}
};
leader.up().up().showStep().down().showStep();