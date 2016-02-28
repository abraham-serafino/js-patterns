
CarBuilder = function(model) {
	this.car = {};

	switch (model) {

	case 'Ford Focus':
		this.partFactory = new FordFocusFactory();
		break;

	case 'Toyota Prius':
		this.partFactory = new ToyotaPriusFactory();
		break;

	default:
		throw '"model" must be "Ford Focus" or "Toyota Prius"';
	}
}

CarBuilder.prototype.addEngine = function() {
	car.engine = this.partFactory.createEngine();
};

CarBuilder.prototype.addTransmission = function() {
	car.transmission = this.partFactory.createTransmission();
};

CarBuilder.prototype.addHeadlightAssembly = function() {
	car.headlightAssembly = this.partFactory.createHeadlightAssembly();
};

CarBuilder.getInstance = function(model) {
	return new CarBuilder(model);
};
