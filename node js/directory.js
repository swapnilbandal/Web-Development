const fs = require('fs')

fs.unlink('writefile.txt',(err,data)=>{
    console.log('File Remove Successfully')
})
//how to create directory 
fs.mkdir('newDir',(err,data)=>{
    console.log('Created Successfully')
})

fs.rmdir('newDir',(err,data)=>{
    console.log('Removed Successfully')
})

// fs.mkdir('newDir',(err,data)=>{
//     console.log('Created Successfully')
//     fs.writeFile('newDir/new.txt','Welcome To Infoway',(err,data)=>{
//         console.log('File Created Successfully')
//     })
// })

 

// Delete the file first
fs.unlink('newDir/new.txt',(err,data) => {
    console.log('File deleted successfully')
    fs.rmdir('newDir', (err,data)=>{

        console.log('Directory deleted successfully');
    })
})
