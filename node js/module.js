const arithmetic = require('./arithmetic')
const student = require('./task')
console.log(arithmetic.a(500,452))
console.log(arithmetic.b(500,452))
console.log(arithmetic.c(50,4))
console.log(arithmetic.d(500,101))

let stdObj= new student(201,"Swapnil",999,"Pune","A+")
stdObj.studentDetails()


