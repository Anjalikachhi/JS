function hello(){
   console.log("hello"); 
}
setTimeout(hello,2000);
// direct function for timeout
setTimeout( ()=>{
   console.log("hello");
},4000);
console.log("hello i am anjali");
console.log("hehehe");

/// callbacks
// function sum(a,b){
//    console.log(a+b);
// }
 function calculator(a,b,sumCallback){
sumCallback(a,b);
}
// calculator(1,2,sum);
// using the arrow function
calculator(1,2,(a,b)=>{
   console.log(a+b);
})

//asynchronous
const Hello =()=>{
   console.log("hello");
};
setTimeout(Hello,3000);