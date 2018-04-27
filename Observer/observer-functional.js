const NYSE = new Proxy({}, {
  set(obj, prop, value) {
    obj[prop] = value
    const keys = Object.keys(obj)

    const total = keys.reduce((average, key) => average + obj[key], 0)
    console.log("Average price: " + total / keys.length)
  }
})

NYSE.ibm = 15
NYSE.microsoft = 45
NYSE.ibm = 45
