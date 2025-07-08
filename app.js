const express = require('express')

const app = express()


// routes using expresss
//FUN FACT == behind the scene express also uses http 😂
app.get('/',(req,res)=>{
    res.send("homepage")
})

app.get('/about',(req,res)=>{
    res.send("about")
})

app.listen(3000)