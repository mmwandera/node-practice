const EventEmitter = require('node:events');

// Instantiating emitter object from EventEmitter class
const emitter = new EventEmitter();

// Responding to "order-pizza" event
emitter.on("order-pizza", (size, toppings) => {
    console.log(`Order for ${size} pizza with ${toppings} toppings.`)
})

emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log("Serving complimentary drink")
    }
})

// Using the emitter object, we can emit events
emitter.emit("order-pizza", "large", "mushroom")