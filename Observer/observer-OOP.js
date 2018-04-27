function Observable() {
  const observers = []

  function registerObserver(observer) {
    if (observers.indexOf(observer) < 0) {
      observers.push(observer)
    }
  }

  function unregisterObserver(observer) {
    const index = observers.indexOf(observer)

    if (index >= 0) {
      observers.splice(index, 1)
    }
  }

  function notifyObservers(payload) {
    console.log(observers)
    observers.forEach((observer) => observer.notify(payload))
  }

  return { registerObserver, unregisterObserver, notifyObservers }
}

function Stock() {
  let price = 0

  function setPrice(newPrice) {
    price = newPrice
    this.notifyObservers()
  }

  function getPrice() {
    return price
  }

  return { ...Observable(), setPrice, getPrice }
}

function Observer() {
  function notify(payload) {
    throw new TypeError("Please define a notify method")
  }

  return { notify }
}

function StockIndex() {
  const stocks = {
    ibm: Stock(),
    microsoft: Stock()  
  }

  function getStocks() { return stocks }
  function setStocks(newStocks) { stocks = newStocks }

  function notify() {
    const prices = Object.keys(stocks).map((key) => stocks[key].getPrice())

    const total = prices.reduce(
      (average, currentPrice) => average + currentPrice,
      0
    )

    console.log("Average price: " + total / prices.length)  
  }

  const _this = { ...Observer(), getStocks, setStocks, notify }

  Object.keys(stocks).forEach(
    (key) => stocks[key].registerObserver(_this)
  )

  return _this
}

const nyse = StockIndex()

const { ibm, microsoft } = nyse.getStocks()

ibm.setPrice(15)
microsoft.setPrice(45)
ibm.setPrice(45)
