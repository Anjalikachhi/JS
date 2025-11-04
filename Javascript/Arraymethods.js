// MAp creates a new array with the results of some operation 
let arr=[3,5,6,6,7];
 newarray=arr.map((val)=>{
    return val*2;
});
console.log(newarray);
//filter= creates a new array of element that agive true fo r a condition 
let newarr=arr.filter((val)=>{
    return val%2!=0;
})
console.log(newarr);
//reduce =to get single value in output giving many input
const ini=0;

const output=arr.reduce((res,cur)=>{
     return res+cur;
})
console.log(output);
// to find the max in an array using the reduce
const out=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(out);