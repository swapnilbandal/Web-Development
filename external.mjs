export const myName="Swapnil Bandal"
export let add =(a,b)=>{
    return a+b
}

export class Result{
    m1
    m2
    m3
    total
    percent
    constructor(a,b,c){
        this.m1=a
        this.m2=b
        this.m3=c
    }
    percentage(){
        this.total = this.m1+this.m2+this.m3
        this.percent=this.total/3
    }
    result(){
        console.log(this.total)
        console.log(this.percent)
    }
}

