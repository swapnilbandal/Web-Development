const http = require('http')
let server=http.createServer((req,res)=>{

    if(req.url=='/' || req.url=='/home'){
        res.write('This is Home Page')
        res.end()
    }
    else if(req.url=='/about'){
        res.write('This is About Page')
        res.end()
    }
    else if(req.url=='/service'){
        res.write('This is Service Page')
        res.end()
    }
    else if(req.url=='/contact'){
        res.write('This is Contact Page')
        res.end()
    }
})

server.listen(8000,()=>{
    console.log('Server Created Successfully')
})