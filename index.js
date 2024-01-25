const fs = require("node:fs")

// WRITING FILES
console.log("First")

// Reading files synchronously
const fileContents = fs.readFileSync("file.txt", "utf8")
console.log(fileContents)


console.log("Second")

// Reading files asynchronously
fs.readFile("file.txt", "utf8", (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

console.log("Third")

// WRITING FILES

// Writing files synchronously
fs.writeFileSync("./greet.txt", "whagwan bruv")

// Writing files asynchronously
// If the file does not exist it will be created
// By default writeFile will overwrite existing files if file exists
// fs.writeFile("./greet.txt", "in a bit bruv", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File written successfully")
//     }
// })

// To append to a file
fs.writeFile("./greet.txt", ". you good fam?", {flag: "a"}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File written successfully")
    }
})