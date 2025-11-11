let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
console.log("box was clicked");
if(turn0===true){
    box.innerText="0";
    turn0=false;

}else{
    box.innerText="X";
    turn0=true;
}
box.disabled=true;

checkWinner();
    });
});

const disableBoxes= ()=>{
    boxes.forEach((box) => {
    box.style.pointerEvents = "none"; // disables mouse interaction
    
  });
};
 const enableBoxes= ()=>{
    boxes.forEach((box) => {
    box.style.pointerEvents = "auto"; // disables mouse interaction
box.innerText="";
  });}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
 const checkWinner = () => {
    for ( let pattern of winPatterns){

    let Posi1= boxes[pattern[0]].innerText;
    let Posi2= boxes[pattern[1]].innerText;
    let Posi3= boxes[pattern[2]].innerText;
    if(Posi1 !=""&& Posi2!="" && Posi3 !=""){
        if(Posi1 ===Posi2&& Posi2===Posi3){
            console.log("winner");
            showWinner(Posi1);
        }
    }
};

}

newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);