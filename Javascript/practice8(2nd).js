let arr=[3,5,6,8,9,3];
arr.forEach((val)=>{
    console.log(val*val);
});
//or
let square=(val)=>{
    console.log(val*val);
};
arr.forEach(square);