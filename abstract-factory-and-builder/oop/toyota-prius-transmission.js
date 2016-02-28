
ToyotaPriusTransmission = function() {
	Transmission.apply(this);
	this.maxGear = 6;
}

ToyotaPriusTransmission.prototype = new Transmission();
