const student={
    fullname:"Anjali",
    marks:94.4,
    printMarks: function(){
        console.log("marks=",this.marks);
    },

};
const employee={
    calcTax(){
        console.log("tax rate is 10%"
        );

    },
};
const anjuanji={
    salary:50000,

};
anjuanji.__proto__=employee;

class MarutiCar{
    //constructor
    constructor(brand){
        this.brand=brand;
        console.log("creating an object");
    }
start(){
    console.log("start");

}
stop(){
    console.log("stop");
    
}stBrand(brand){
       this.brand=brand; 
    }

}
let van=new MarutiCar();
van.stBrand("maruti");
let lexus=new MarutiCar("lexus");