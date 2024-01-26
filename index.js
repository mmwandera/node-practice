const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    // req.method => GET, POST, PUT, PATCH, DELETE
    if(req.url === "/" ){
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if(req.url === "/about"){
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("About Page")
    } else if(req.url === "/api"){
        res.writeHead(200, { "Content-Type": "application/json" })
        const obj = { firstName: "Bruce", lastName: "Wayne" }
        res.end(JSON.stringify(obj))
    } else{
        res.writeHead(404)
        res.end("Page not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})

