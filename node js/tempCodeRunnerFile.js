const fs = require('fs')

fs.unlink('writefile.txt',(err,data)=>{
    console.log('File Remove Successfully')
})
//how to create directory 
fs.mkdir('newDir',(err,data)=>{
    console.log('Created Successfully')
})