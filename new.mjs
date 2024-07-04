import {myName,add} from './external.mjs'
import {Result} from './external.mjs'
console.log(myName)
console.log(add(4,5000))
let a= new Result(10,85,96)
console.log(a.percentage())
console.log(a.result())

