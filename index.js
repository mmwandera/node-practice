setTimeout(() => {
    console.log("I am timeout")
}, 3000)

Promise.resolve().then(() => {
    console.log('I am promise')
})
process.nextTick(() => {
    console.log('I am next tick')
})

// Callbacks in the microtask queues are executed before callbacks in the timer queue
// I am next tick
// I am promise
// I am timeout