const fs = require('fs')

fs.readFile(__filename, () => {
    console.log('I am read file')
    setImmediate(() => {
        console.log("I am immediate")
    })
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


for (let i =0; i<2000000000; i++) {}

// Check queue callbacks are executed after microtask queue callbacks, timers and I/O callbacks