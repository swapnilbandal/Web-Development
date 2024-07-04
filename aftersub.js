function checkAll(){

    let uname=document.getElementById("fname").value
    let regName="[a-zA-Z]{3,20}"
    if(uname.trim()==""){
        window.alert("Name field is required")
        document.getElementById("fname").focus()
        return false
    }
    if(!uname.match(regName)){
        window.alert("Input Data In Correct Format")
        document.getElementById("fname").focus()
        return false
    }
    let uedu=document.myform.edu
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false  ){
        window.alert("Please Select Your Qualification")
        return false
    }

}