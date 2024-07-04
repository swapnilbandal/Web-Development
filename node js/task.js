module.exports = class student{
    stdId=101
    stdName="Swapnil"
    stdContact=9156432568
    stdAddress="Shirur"
    stdGrade="A"
    
    constructor(id,name,contact,address,grade){
        this.stdId=id
        this.stdName=name
        this.stdContact=contact
        this.stdAddress=address
        this.stdGrade=grade
    }
    studentDetails() {
        console.log(`ID=${this.stdId} Name=${this.stdName} Contact=${this.stdContact} Address=${this.stdAddress} Grade=${this.stdGrade}`)
    }

}



