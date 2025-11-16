console.log("hello");
window.alert("hello");

// console.body.style.backgroundcolor="pink";


// for accesing the document using id class and tag
 let head=document.getElementById("demo");
 console.dir(head);
 let heads=document.getElementsByClassName("demo-class");
 console.dir(heads);
 let para=document.getElementsByTagName("p");
 console.dir(para);


//for accesing anything we can just use query selector it will detect and then return the document
// queryselector returns the first document only 
let elements=document.querySelector("p");
console.dir(elements);
//for all the elements the use query selectorall
//for id use # for class use . and for tag use nothing just name 
let element=document.querySelectorAll("h2");
console.dir(element);