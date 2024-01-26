Promise.resolve().then(() => {
    console.log('I am promise')
})
process.nextTick(() => {
    console.log('I am next tick')
})

// I am next tick
// I am promise