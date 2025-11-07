// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from youtube";
let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;

}
// divs[0].innerText="new unique value one";
// divs[1].innerText="new unique value two";
// divs[2].innerText="new unique value three";
