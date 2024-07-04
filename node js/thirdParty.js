const validator = require('validator')
console.log(validator.isEmail('swapnilbandal@gmail.com'))   //true

let fname='swapnil'
let name=''
console.log(validator.isEmpty(fname))   //false
console.log(validator.isEmpty(name))    //true
console.log(validator.equals('apple',"Apple"))    //false
console.log(validator.equals('apple',"apple"))    //true