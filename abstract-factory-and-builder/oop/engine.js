Engine = function() {
	this.currentSpeed = 0;
	this.weight = 80;
	this.width = 27;
}

Engine.prototype.accelerate = function() {

	if (this.currentSpeed < this.maxSpeed) {
		this.currentSpeed += this.accelerationRate;
	}
};

Engine.prototype.decelerate = function() {

	if (this.currentSpeed > 0) {
		this.currentSpeed--;
	}
};
