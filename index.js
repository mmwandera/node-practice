// CALLBACKS
// In js, functions are first class objects
// Functions can be passed as arguments to other functions
// A function can also be returned from another function

// A function passed as an argument to another function is called a callback function
function greet(name) {
    console.log(`Hello ${name}`);
}

function greetMark(greetFn) {
    const name = 'Mark';
    greetFn('Mark');
}

greetMark(greet); // "Hello Mark"