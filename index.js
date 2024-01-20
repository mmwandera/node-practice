// const path = require('node:path');
const path = require('path');

console.log(path.join("hello", "world", "data.json")); // hello/world/data.json
console.log(path.join("/hello", "world", "data.json")); // /hello/world/data.json
console.log(path.join("/hello", "//world", "data.json")); // /hello/world/data.json
console.log(path.join("/hello", "//world", "../data.json")); // /hello/data.json
console.log(path.join(__dirname, "data.json")); //gives absolute path to data.json

console.log(path.resolve("hello", "world", "data.json"));
console.log(path.resolve("/hello", "world", "data.json"));
console.log(path.resolve("/hello", "//world", "data.json"));
console.log(path.resolve("/hello", "//world", "../data.json")); 
console.log(path.resolve(__dirname, "data.json")); 

// console.log(__dirname)
console.log(__filename)

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

console.log(path.extname(__dirname))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__filename)) // Returns true if the path is absolute
console.log(path.isAbsolute('./data.json')) // Returns false if the path is absolute

