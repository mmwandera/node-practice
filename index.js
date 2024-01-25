const buffer = new Buffer.from("mans just here init")

buffer.write("as i said, mans just here init")

console.log(buffer)
console.log(buffer.toJSON()) // 
console.log(buffer.toString())