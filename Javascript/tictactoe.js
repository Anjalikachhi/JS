let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector("#draw-msg");
let count=0;

let turn0=true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const resetgame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
    draw.innerText="";
    msg.innerText="";

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turn0===true){
    box.innerText="0";
    box.classList.add("o");
    turn0=false;

}else{
    box.innerText="X";
    box.classList.add("x");
    turn0=true;
}
box.disabled=true;
count++;

const isWinner=    checkWinner();
if( !isWinner&&count===9 ){
    showDraw();
}
    });
});
const showDraw=()=>{
    draw.innerText="its a draw";
    msg.innerText="";
    msgcontainer.classList.remove("hide");
    disableBoxes();

};

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
    draw.innerText="";
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
            return true;
        }
    }
}return false;

};

newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);