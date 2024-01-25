const fs = require('node:fs')

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf8',
    highWaterMark: 2,
})

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data', (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk)
})

// TYPES OF STREAMS
// 1. Readable Streams from which data can be read
// 2. Writable Streams to which data can be written
// 3. Duplex Streams from which data can be read and written
// 4. Transform Streams from which data can be read and transformed to another format