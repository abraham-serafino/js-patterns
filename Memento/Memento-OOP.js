function Customer(ssn) {
  let _ssn = ssn
  const _key = new Date()

  function getSSN() {
    return _ssn
  }

  function setSSN(ssn) {
    _ssn = ssn
  }

  function saveMemento() {
    return new Memento(_ssn)
  }

  function restoreFromMemento(memento) {
    _ssn = memento.getSavedState(_key)
  }

  function Memento(state) {
    const savedState = state

    return {
      getSavedState(key) {
        if (key === _key) {
          return savedState
        }

        else {
          throw new Exception("Only the originator can access it's own state")
        }
      }
    }
  }

  return { getSSN, setSSN, saveMemento, restoreFromMemento }
}

function Clerk() {
  const customer = new Customer()
  let memento = null

  function sayHello() {
    console.log(`Hello, ${customer.getName()}.`) // "Hello, Bob."
  }

  function changeCustomerName(name) {
    memento = customer.getMemento()
    customer.changeName(name)
  }

  function rollback() {
    customer.restoreFromMemento(memento)
  }

  function getMemento() {
    return memento
  }

  return { sayHello, changeCustomerName, rollback, getMemento }
}

const clerk = new Clerk()
clerk.sayHello() // "Hello, Bob."
clerk.changeCustomerName("Bill")
clerk.sayHello() // "Hello, Bill."

const memento = clerk.getMemento()
console.log(memento.getName())
  // "Only the originator can access it's own state"

clerk.rollback()
clerk.sayHello() // "Hello, Bob."
