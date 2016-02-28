
ToyotaPriusFactory = function() {
	CarPartFactory.apply(this);
}

ToyotaPriusFactory.prototype = new CarPartFactory();

ToyotaPriusFactory.prototype.createEngine = function() {
	var part = new ToyotaPriusEngine();
	this.stampSKU(part);
	return part;
}

ToyotaPriusFactory.prototype.createTransmission = function() {
	var part = new ToyotaPriusTransmission();
	this.stampSKU(part);
	return part;
}

ToyotaPriusFactory.prototype.createHeadlightAssembly = function() {
	var part = new ToyotaPriusHeadlightAssembly();
	this.stampSKU(part);
	return part;
}
