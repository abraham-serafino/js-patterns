var Customer = function() {

	var state = {
		key: new Date(),
		name: 'Bob',
		age: 27,
		elligibleForDiscount: false
	};

	this.changeName = function(name) {
		state.name = name;
	};

	this.getName = function() {
		return state.name;
	};

	this.getMemento = function() {
		var originalState = _.clone(state);

		return function unlockMemento(key) {

			if (key === state.key) {
				return originalState;
			}

			throw 'State can only be restored by the originator.';
		};
	};

	this.restoreState = function(unlockMemento) {
		state = unlockMemento(state.key);
	};
};

var bob = new Customer();
console.log( bob.getName() ); // "Bob"
var memento = bob.getMemento();
bob.setName('Bill');
console.log( bob.getName() ); // "Bill"

console.log( memento().getName() );
		// "State can only be restored by the originator."

bob.restoreState(memento);
console.log( bob.getName() ); // "Bob"