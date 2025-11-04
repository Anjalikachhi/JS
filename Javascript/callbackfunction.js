//callbackfunction:here, it is a function to execute for each element in the array
// a callback is a function passed as an argument to another function
let arr=[2,4,5,5,6,6,7,8];
arr.forEach(function print(val)
{
    console.log(val);
});
// by using arrow function
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})//higher order function or methods are the function are who take or return another function and take it as a parameter like forEach function 