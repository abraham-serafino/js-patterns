
Transmission = function() {
	this.currentGear = 0; // 0 = park
	this.weight = 12;
	this.width = 46;
}

Transmission.prototype.shiftGear = (function() {

	function shiftUp() {

		if (this.currentGear < this.maxGear) {
			this.currentGear++;
		}
	}

	function shiftDown() {

		if (currentGear > 0) {
			currentGear--;
		}
	}

	return function(direction) {

		switch (direction) {

		case 'up':
			shiftUp.apply(this);
			break;

		case 'down':
			shiftDown.apply(this);
			break;

		default:
			throw new 'Invalid operation';
		}
	};
})();
