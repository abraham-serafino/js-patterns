
CarComposer = {

	compose: function (engineOptions, transmissionOptions, headlightAssemblyOptions) {

		var sku = {
			sku: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			})
		};

		var car = {};

		function composeEngine() {
			car.engine 					= _.extend(Engine, sku);
			car.engine.maxSpeed 		= engineOptions.maxSpeed || 100;
			car.engine.accelerationRate = engineOptions.accelerationRate || 1;	
		}

		function composeTransmission() {
			car.transmission 			= _.extend(Transmission, sku);
			car.transmission.maxGear	= transmissionOptions.maxGear || 5;
		}

		car.headlightAssembly = sku;

		return car;
	}
};
