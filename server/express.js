const express = require('express')
require('dotenv').config({ path: 'D:/Web_Development/server/.env' })

const app = express()

let host = process.env.HOST
let port = process.env.PORT
app.get('/',(req,res,next)=>{
    
    res.sendFile(__dirname+'/index.html')
})
app.get('/about',(req,res,next)=>{
    
    res.sendFile(__dirname+'/about.html')
})
app.get('/service',(req,res,next)=>{
    
    res.sendFile(__dirname+'/service.html')
})
app.get('/contact',(req,res,next)=>{
    
    res.sendFile(__dirname+'/contact.html')
})
app.get('/*',(req,res,next)=>{
    
    res.sendFile(__dirname+'/404.html')
})

app.listen(8888,()=>{
    console.log(`server started successfully ${host}:${port}`)
})

