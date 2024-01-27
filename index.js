const fs = require('fs')

fs.readFile(__filename, () => {
    console.log('I am read file')
})

process.nextTick(() => {
    console.log("I am next tick")
})

Promise.resolve().then(() => {
    console.log("I am promise")
})

setTimeout(() => {
    console.log("I am timeout")
}, 0)

setImmediate(() => {
    console.log("I am immediate")
})

for (let i =0; i<2000000000; i++) {}

// "I am immediate" is logged before "I am timeout" which is strange cause I/O queue is before check queue