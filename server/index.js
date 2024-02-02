const http = require("http")
// const url = require("url")

const server = http.createServer((req , res) => {
    // console.log(req.url)
    if(req.url == "/"){
        res.end("fsdghjggfhjgfddfhgj");
    }else if(req.url == "/about"){
        res.end("Hello");
    }
    else if(req.url == "/contact"){
        res.end("Hello contact");
    }else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("<h1>404 Not Found...</h1>")
    }
    
})

server.listen(5500,"127.0.0.1",() => {
    console.log("Server is Ready!")
})