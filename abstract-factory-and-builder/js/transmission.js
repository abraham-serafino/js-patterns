
Transmission = {

	SHIFT_UP: 'up',
	SHIFT_DOWN: 'down',

	currentGear: 0,
	weight: 12,
	width: 46,

	shiftGear: function(direction) {

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

		switch (direction) {

		case Transmission.SHIFT_UP:
			shiftUp.apply(this);
			break;

		case Transmisison.SHIFT_DOWN:
			shiftDown.apply(this);
			break;

		default:
			throw new 'Invalid operation';
		};
	}
};