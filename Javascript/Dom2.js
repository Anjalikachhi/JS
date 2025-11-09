// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// console.log(name);
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","123"));

// let div=document.querySelector("div");
// console.log("div");
// div.style.backgroundColor="green";
// // div.style.visibility="hidden";
// div.style.fontSize="27px";

// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);

// let divs =document.querySelector("div");
// for adding in the last
// divs.append(newbtn);
// for adding inthe front
// divs.prepend(newbtn);
// for just before it
// divs.before(newbtn);
// for after the node
// 
let newheading =document.createElement("h1");
newheading.innerHTML="<i> HI, i am new here</i>";
console.log(newheading);
document.querySelector("div").append(newheading);
newheading.remove();
