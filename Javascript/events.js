let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>
{
    console.log("handler1");
} );
btn1.addEventListener("click",()=>
{
    console.log("handler2");
} );
const handler=()=>
{
    console.log("handler3");
}
btn1.addEventListener("click",handler );
btn1.addEventListener("click",()=>
{
    console.log("handler4");
} );
// btn1.removeEventListener("click",handler)
//  btn1.onclick= (evt ) => {
//     console.log(evt);
//     console.log(evt.type);
//         console.log(evt.targe/t);
//             console.log(evt.clientX,evt.clientY);


//     console.log("btn1 was clicked");
    
// };
let btn=document.querySelector(".box");
 btn.onclick= () =>{
    console.log("button was created");
    let p=34;
    p--;
    console.log(p);
 };