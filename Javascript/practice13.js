 class user{constructor(name,email){

    this.name=name;
    this.email=email;}
    viewdata(){
console.log("view your data");
    }

 }
let obj=new user("anjali","abc");

/// create a new class admin which inherits from user .add anew method called editdata to admin that allows it to edit website data
class Admin extends user{
editdata(){
    console.log("i can edit it ");
}
}
let obj2=new Admin();
