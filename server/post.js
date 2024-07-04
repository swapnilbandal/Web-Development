const express = require('express')
require('dotenv').config({ path: 'D:/Web_Development/server/.env' })


const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let host = process.env.HOST
let port = process.env.PORT
app.get('/product',(req,res,next)=>{
    
    res.send('this is get request')
})
app.put('/product',(req,res,next)=>{
    
    res.send('this is put request')
})
app.post('/product',(req,res,next)=>{
    res.setHeader('Content-Type', 'text/plain')
    const data= {   pname:req.body.pname,
                    price: req.body.price,
                    company: req.body.company,
                }
    res.send(data)
})
app.delete('/product',(req,res,next)=>{
    
    res.send('this is delete request')
})
app.get('/*',(req,res,next)=>{
    
    res.sendFile(__dirname+'/404.html')
})

app.listen(8888,()=>{
    console.log(`server started successfully ${host}:${port}`)
})

