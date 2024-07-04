function add(){
    
    let a= document.getElementById("num1").value
    let b=document.getElementById("num2").value
    c=(parseInt(a)+parseInt(b))
    document.getElementById("res").innerHTML=c
}

function sub(){
    
    let a= document.getElementById("num1").value
    let b=document.getElementById("num2").value
    c=(parseInt(a)-parseInt(b))
    document.getElementById("res").innerHTML=c
}

function mul(){
    
    let a= document.getElementById("num1").value
    let b=document.getElementById("num2").value
    c=(parseInt(a)*parseInt(b))
    document.getElementById("res").innerHTML=c
}

function div(){
    
    let a= document.getElementById("num1").value
    let b=document.getElementById("num2").value
    c=(parseInt(a)/parseInt(b))
    document.getElementById("res").innerHTML=c
}

function mod(){
    
    let a= document.getElementById("num1").value
    let b=document.getElementById("num2").value
    c=(parseInt(a)%parseInt(b))
    document.getElementById("res").innerHTML=c
}

