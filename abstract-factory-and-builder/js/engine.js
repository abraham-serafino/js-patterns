Engine = {

	currentSpeed: 0,
	weight: 80,
	width: 27,

	accelerate: function() {

		if (this.currentSpeed < this.maxSpeed) {
			this.currentSpeed += this.accelerationRate;
		}
	},

	decelerate: function() {

		if (this.currentSpeed > 0) {
			this.currentSpeed--;
		}
	}

};
