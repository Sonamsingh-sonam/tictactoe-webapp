let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let mesgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerO

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
 const resetGame=()=>{
    turnO=true;
    enableboxes();
    mesgcontainer.classList.add("hide"); }

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="x";
            turnO=true;

            checkWinner();
        }

   });
 });
 const disableboxes=()=>{
    for(let box of boxes){
     box.disabled=true;
    }
  };
  const enableboxes=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
  };

 const showwinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    mesgcontainer.classList.remove("hide");
    disableboxes();
 }

 const checkWinner=()=>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;

        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=" "&& pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val==pos3Val){
                console.log("winner".pos1Val);
                showwinner(pos1Val);
            }
        }

    }
 };
 newGameBtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);

 
 