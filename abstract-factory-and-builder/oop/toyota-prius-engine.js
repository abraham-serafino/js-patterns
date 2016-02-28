
ToyotaPriusEngine = function() {
	Engine.apply(this);
	this.accelerationRate = 3;
}

ToyotaPriusEngine.prototype = new Engine();
