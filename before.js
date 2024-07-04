function checkUID(){
    let uname=document.getElementById("uid").value
    let regName="[a-zA-Z]{3,20}"
    if(uname.trim()==""){
        
        document.getElementById("uid").style.border="2px solid red"
        document.getElementById("uidr").style.color="red"
        document.getElementById("uidr").innerHTML="User ID is required"
        return false
    }
    else if(!uname.match(regName)){
        document.getElementById("uid").style.border="2px solid red"
        document.getElementById("uidr").style.color="red"
        document.getElementById("uidr").innerHTML="Input Data In Correct Format"
        return false
    }
    else{
        document.getElementById("uid").style.border="2px solid green"
        document.getElementById("uidr").style.color="green"
        document.getElementById("uidr").innerHTML="Hawaaaaa naaaaa"
    
    }
    let uedu=document.myform.edu
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false  ){
        window.alert("Please Select Your Qualification")
        return false
    }
}
    function checkTerm(){
        let uterm=document.myform.term
        if(uterm.checked==false){
        document.getElementById("termer").style.border="2px solid red"
        document.getElementById("termer").innerHTML="accept term and condition"
        document.getElementById("termer").style.color="red"

        }
        else{
            document.getElementById("term").style.border="2px solid green"
            document.getElementById("termer").innerHTML=""
        }
        
    }
