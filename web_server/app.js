const express = require('express')
require('dotenv').config({ path: 'D:/Web_Development/server/.env' })
const hbs = require('hbs')
const app = express()
const path=require('path')
let host = process.env.HOST
let port = process.env.PORT

//file path for accessing static data
app.use(express.static(__dirname+'/public'))
//file fath for template
const viewPath=path.join(__dirname,'/template/views')
app.set('view engine','hbs')
app.set('views',viewPath)

app.get('/',(req,res,next)=>{
    
    // res.sendFile(__dirname+'/index.html')
    res.render('index',{
                            owner:'Swapnil Bandal',
                            company:'Swapnil Bandal'
                        })
})
app.get('/about',(req,res,next)=>{
    
    // res.sendFile(__dirname+'/about.html')
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

app.listen(port,()=>{
    console.log(`server started successfully ${host}:${port}`)
})

