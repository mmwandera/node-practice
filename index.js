const fs = require('fs')

const readableStream = fs.createReadStream(__filename);
readableStream.close()

readableStream.on('close', () => {
    console.log("This is from readableStream close event callback")
})

setImmediate(() => {
    console.log("I am immediate")
})

setTimeout(() => {
    console.log("I am timeout")
}, 0)

Promise.resolve().then(() => {
    console.log("I am promise")
})

process.nextTick(() => {
    console.log("I am next tick")
})

// I am next tick
// I am promise
// I am timeout
// I am immediate
// This is from readableStream close event callback





