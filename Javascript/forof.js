let str="Apnaghar";
let size=0;
for (let i of str) {//iterative
    console.log(i);
    size++;
}
console.log(size);
// for objects we use for in loop 
let stu={
    name:"anjali kachhi",
    rollNO:4,
};
for(let key in stu){
    console.log(key,stu[key]);
}