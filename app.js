const express = require('express')

const app = express()


// routes using expresss
//FUN FACT == behind the scene express also uses http 😂
// app.get('/',(req,res)=>{
//     res.send("homepage")
// })

// app.get('/about',(req,res)=>{
//     res.send("about")
// })


// now using express js to render html page in routes
app.set("view engine",'ejs')


// middlewares = = 
app.use((req,res,next)=>{
    console.log(" this is middleware ");
    return next()
})


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.send("about")
})

app.listen(3000)