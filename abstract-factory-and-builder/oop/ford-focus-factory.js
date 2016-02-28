
FordFocusFactory = function() {
	CarPartFactory.apply(this);
}

FordFocusFactory.prototype = new CarPartFactory();

FordFocusFactory.prototype.createEngine = function() {
	var part = new FordFocusEngine();
	this.stampSKU(part);
	return part;
}

FordFocusFactory.prototype.createTransmission = function() {
	var part = new FordFocusTransmission();
	this.stampSKU(part);
	return part;
}

FordFocusFactory.prototype.createHeadlightAssembly = function() {
	var part = new FordFocusHeadlightAssembly();
	this.stampSKU(part);
	return part;
}
