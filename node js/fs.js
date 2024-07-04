const fs=require('fs')

fs.writeFileSync('writeFile.txt','How Are You All?\n')
let data=fs.readFileSync('writeFile.txt','utf-8')
console.log(data)
fs.writeFileSync('writeFile1.txt',data)
let data1=fs.readFileSync('writeFile1.txt','utf-8')
console.log(data1)

fs.appendFile('writeFile.txt',' We All Are Fine',(err,data)=>{
    console.log(' Appended Successfully')
})

fs.readFile('writeFile.txt','utf-8',(err,rdata)=>{
    console.log(rdata)
})