// const add = require('./add')

// console.log(add(55, 10))

// const math = require('./math')

// console.log(math.add(55, 10))
// console.log(math.subtract(55, 10))

// Destructuring
const {add, subtract} = require('./math')

console.log(add(55, 10))
console.log(subtract(55, 10))