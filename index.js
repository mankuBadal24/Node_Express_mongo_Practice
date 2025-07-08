// creating server using http createserver function demo

const http = require("http")

// createServer method demo
// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     res.end("Hi Mayank")
// })



//  routes demo
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("homepage")
    }
    if(req.url == "/about"){
        res.end("about page")
    }
})
server.listen(8000)