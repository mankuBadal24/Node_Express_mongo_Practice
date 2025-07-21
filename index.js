// creating server using http createserver function demo

// const http = require("http")

// createServer method demo
// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     res.end("Hi Mayank")
// })



//  routes demo
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.end("homepage")
//     }
//     if(req.url == "/about"){
//         res.end("about page")
//     }
//     if(req.url == "/contact"){
//         res.end("contact page")
//     }
// })
// server.listen(8000)

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.get("/profile/:username", (req, res) => {
    res.send(`Hello ${req.params.username}`);
});

app.get('/author/:username/:age', (req,res) => {
    res.send(`welcome to author profile of ${req.params.username}, age is ${req.params.age} years old.`);
})

app.listen(3000);