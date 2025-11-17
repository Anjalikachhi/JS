class Parent{
    constructor(name){
                console.log("enter parent constructor");
                this.name=name;
    }
    say(){
        console.log("hello");
    }
    play(){
        console.log("not playing");
    }
}
class child extends Parent{
    constructor(name){
         super(name);//to invoke parent class constructor
                // this.sleep=sleep;
        

    }
play(){
    super.say();
    console.log("playing");
}
}
let obj= new child("anju");