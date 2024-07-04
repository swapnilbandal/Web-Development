require('dotenv').config({ path: 'D:/Web_Development/server/.env' })
const prompt=require('prompt')
const nodemon = require('nodemon')
// require('dotenv').config()
const http = require('http')
const fs = require('fs')
prompt.start()

let host = process.env.HOST
let port = process.env.PORT
let uid = process.env.USERID
let password = process.env.PASSWORD
let server = http.createServer((req, res) => {

    if (req.url == '/' || req.url == '/home') {
        let myReader = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' })
        myReader.pipe(res)

    } else if (req.url == '/about') {
        let myReader = fs.createReadStream(__dirname + '/about.html', 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' })
        myReader.pipe(res)
    }

    else if (req.url == '/service') {
        let myReader = fs.createReadStream(__dirname + '/service.html', 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' })
        myReader.pipe(res)
    }
    else if (req.url == '/contact') {
        let myReader = fs.createReadStream(__dirname + '/contact.html', 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' })
        myReader.pipe(res)
    }

})



prompt.get(['credentials'],function(err,result){
    let [userid, password1] = result.credentials.split(' ');
    if(userid==uid && password1==password){
        server.listen(port, host, () => {
            console.log(`Server Created Successfully On ${host}:${port}`)
        })
    }
    else{
        console.log('Wrong Credentials')
    }
     
})
