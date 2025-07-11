const express = require('express')
const morgan = require('morgan')
const app = express()


// routes using expresss
//FUN FACT == behind the scene express also uses http 😂
// app.get('/',(req,res)=>{
//     res.send("homepage")
// })

// app.get('/about',(req,res)=>{
//     res.send("about")
// })

app.use(morgan('dev'))
// now using express js to render html page in routes
app.set("view engine",'ejs')



// custom middlewares = = 
// app.use((req,res,next)=>{
//     console.log(" this is middleware ");
//     return next()
// })

// third party middleware

app.get('/',(req,res,next)=>{
    const a= 8;
    const b= 5;
    console.log(a+b);
    next()

},(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.send("about")
})

app.listen(3000)