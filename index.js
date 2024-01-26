const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    // const html = fs.readFileSync("./index.html", "utf-8");
    // res.end(html);
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})

// const server = http.createServer((req, res) => {

//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>mans just here init</h1>");
// })

// server.listen(3000, () => {
//     console.log("Server running on port 3000")
// })