let str="Anjali";
// to convert into uppercase
let newstr=str.toUpperCase();
console.log(newstr);
let str2="   Kachhi   ";
//to trim the spaces in the start and end
let new2=str2.trim();
console.log(new2);
//to print particular alphabet in the string
console.log(str[5]);
let obj={
    item:"pen",
    price:20,
};
//for printing the string and the object key in a line and it is treated as string
console.log("The cost of" , obj.item,obj.price);
let output=`the cost of ${obj.item} is ${obj.price}`;
console.log(output)
//Template literals
let sentence= `this is a template literal`;
console.log(typeof sentence ,"Anjali \t kachhi ");
// other properties
// str.slice(Start,end?);    //returns the part of string end is not included in the slice and if we don't give the end then the default to the last will be printed
// str.concat(str2);    //join str and str2
// str.replace(searchVal,newVal);
// str.charAt(idx);