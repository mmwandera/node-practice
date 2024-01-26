const fs = require('fs')

fs.readFile(__filename, () => {
    console.log('I am read file')
})

setTimeout(() => {
    console.log("I am timeout")
}, 0)

// When running setTimeout with a delay of 0ms and an I/O sync method, the order of execution can never be guaranteed