let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let name=div.getAttribute("name");
console.log(name);
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class","Hello");
console.log(para.getAttribute("class"));
div.style.backgroundColor="green";
// div.style.visibility="hidden";
div.style.fontSize="27px";

let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);
// for adding in the last
div.append(newbtn);
// for adding inthe front
// div.prepend(newbtn);
// for just before it
// div.before(newbtn);
// for after the node
// 
let newheading =document.createElement("h1");
newheading.innerHTML="<i> HI, i am new here</i>";
console.log(newheading);
document.querySelector("div").after(newheading);
// newheading.remove();
