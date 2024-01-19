// Pattern 1
// const add = (a, b) => {
//     return a + b
// }

// module.exports = add

// Pattern 2
// module.exports = (a, b) => {
//     return a + b
// }

// Pattern 3 (More than one function)
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

// module.exports = {
//     add: add,
//     subtract: subtract
// }

// OR (If the key and value are the same)
// module.exports = {
//     add,
//     subtract
// }

// Pattern 4 
// exports.add = (a, b) => {
//     return a + b
// }

// exports.subtract = (a, b) => {
//     return a - b
// }

// Pattern 5
module.exports.add = (a, b) => {
    return a + b
}

module.exports.subtract = (a, b) => {
    return a - b
}