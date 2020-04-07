function Customer() {

	let state = {
		key: new Date(),
		name: 'Bob',
		age: 27,
		elligibleForDiscount: false
	}

	function changeName(name) {
		state.name = name
	}

	function getName() {
		return state.name
	}

	function getMemento() {
		const originalState = { ... state }

		return function unlockMemento(key) {
			if (key === state.key) {
				return originalState
			}

			throw "State can only be restored by the originator."
		}
	}

	function restoreState(unlockMemento) {
		state = unlockMemento(state.key)
	}

	return { changeName, getName, getMemento, restoreState }
}

const bob = Customer()
console.log(bob.getName()) // "Bob"
const memento = bob.getMemento()
bob.changeName("Bill")
console.log(bob.getName()) // "Bill"

console.log(memento().getName())
	// "State can only be restored by the originator."

bob.restoreState(memento)
console.log(bob.getName()) // "Bob"
