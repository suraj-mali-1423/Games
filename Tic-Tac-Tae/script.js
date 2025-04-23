let boxes =document.querySelectorAll(".box");
let Reset = document.getElementById("Reset-Btn");
let NewGame = document.getElementById("New-game")
let Hide = document.querySelector(".hide")
let Para = document.querySelector(".para")
let Pattern = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8] 
]
let turnO = true; // take trun


const enabled = () => {
    for ( let Box of boxes){
        Box.disabled = false;
        Box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
             turnO = true;
        }
        box.disabled = true;
        CheckWinner();
    })
})
const disabled = () => {
    for ( let Box of boxes){
        Box.disabled = true;
    }
}
const Show = (Win) => {
    Para.innerText = `We Got the Winner! ${Win}👏✨🥳🚀`;
    Hide.classList.remove("hide");
    disabled();
}
const CheckWinner = () => {
     for(let List of Pattern ){
        let pos1 = boxes[List[0]].innerText;
        let pos2 = boxes[List[1]].innerText;
        let pos3 = boxes[List[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
              if(pos1 === pos2 && pos2 === pos3){
               Show(pos1);
            }
        }      
     }
}

Reset.addEventListener("click", () => {
      turnO = true;
      enabled();
      Hide.classList.add("hide");
});

NewGame.addEventListener("click" , () => {
         turn = true;
         enabled();
         Hide.classList.add("hide");
})