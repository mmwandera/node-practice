const fs = require('node:fs')
const zlib = require('node:zlib')

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf8',
    highWaterMark: 2,
})

// Readable stream - Transform stream - Writable stream
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.pipe(writeableStream)

