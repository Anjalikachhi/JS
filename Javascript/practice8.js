function vowel(str){
    let sum=0;
for(let i of str){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
    sum=sum+1;


}
console.log(sum);
}
vowel("anjali");
//using the arrow function
const vow=(str)=>{
      let sum=0;
for(let i of str){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
    sum=sum+1;


}
console.log(sum);

}