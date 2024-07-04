function add(num1,num2){
    return num1+num2
}
let a =(a,b)=>{return a+b}
let b =(a,b)=>{return a-b}
let c =(a,b)=>{return a*b}
let d =(a,b)=>{return a/b}
console.log(add(4,5))
console.log(a(4,5))
console.log(b(4,5))
console.log(c(4,5))
console.log(d(4,5))

module.exports = {a,b,c,d}