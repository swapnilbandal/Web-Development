//class
class person{
    //data member
    name="Swapnil";
    contact=9156432568
    gender="male"
    Address="Pune"
    constructor(name,contact,gender,address){
        this.name=name
        this.contact=contact
        this.gender=gender
        this.address=address }
//member function
    personDetails(){
        console.log(`Name:${this.name} Contact:${this.contact}`)
        //member of current class
    }
}
//object
let personObj = new person("Pranav",5050,"Male","Pune")
console.log(personObj.name)
personObj.personDetails()

//new class
class Company extends person{
    cname
    cpost
    static cpassword="Pass@123"
    clocation
    constructor(name,contact,gender,address,name1,post,location){
        super(name,contact,gender,address)
        this.cname=name1
        this.cpost=post

        this.clocation=location }
    personDetails(){
        console.log(`Name:${this.name} CompanyName:${this.cname} Post:${this.cpost}`)
    }
}

a=new Company("swapnil",5656,"Male","Shirur","Google","CEO","pune")
a.personDetails()

console.log(Company.cpassword)

