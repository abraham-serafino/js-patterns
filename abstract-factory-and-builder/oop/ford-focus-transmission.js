
FordFocusTransmission = function() {
	Transmission.apply(this);
	this.maxGear = 4;
}

FordFocusTransmission.prototype = new Transmission();
