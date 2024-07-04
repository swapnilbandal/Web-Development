const path = require('path')
console.log(__dirname) //it is used to display the path of the folder
console.log(__filename) //it is used to display the path of the file
console.log(path.basename(__dirname)) //it is used to display the name of the folder
console.log(path.basename(__filename)) //it is used to display the name of the file
console.log(path.extname(__filename)) //it is used to display the extention of the file
console.log(path.isAbsolute(__filename)) //it is used to display whether the path of file is absolute or relative file
console.log(path.isAbsolute("../"+__filename)) //it is used to display whether the path of file is absolute or relative file
console.log(path.join(".../dist/"+__filename)) //it is used to join two path of file

