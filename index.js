// creating server using http createserver function demo

const http = require("http")

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.end("Hi Mayank")
})

server.listen(8000)