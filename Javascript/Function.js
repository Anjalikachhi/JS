function MYfunction(msg){//parameter
    console.log("Welcome to the Anjali Codes");
    console.log(msg);
}
MYfunction();
MYfunction(3);//argument
// function to calculate the sum of two number
function Sum(a,b){
  //  console.log(a+b);
  //a and b are local variable
  s=a+b;
    return s;//only one value will be returned but not save yet so if you want to print then saved it somewhere
console.log("after return");
}
Sum(2,3);
// sum arrow function 
  const arrowsum=(a,b)=>{
    console.log(a+b);

};
const arrowmul=(x,y)=>{
    console.log(x*y);
    or // return x*y;

}
const print=()=>{
    console.log("Hello")
}
