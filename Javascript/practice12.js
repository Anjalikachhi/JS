let modebtn=document.querySelector("#mode");
let currmode="light";
body= document.querySelector("body");
modebtn.addEventListener("click" ,()=>{
if(currmode==="light"){
    currmode="dark"
// document.querySelector("body").style.backgroundColor="black";
 body.classList.add("dark");
        body.classList.remove("light");
}else{ currmode="light"
    // document.querySelector("body").style.backgroundColor="white";

  body.classList.add("light");
       body.classList.remove("dark");


}
console.log(currmode);
});