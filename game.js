let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
    resetBoxColors();
}
const resetBoxColors = () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = ""; // Reset to default background color
    });
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
       if(turnO){
        box.innerText = "O"
        box.style.backgroundColor = "#b2ff33";
        turnO = false;
       }else{
        box.innerText = "X";
        box.style.backgroundColor = "#ff8033";
        turnO = true;
       }
       box.disabled = true;
       checkWinner();
    });
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations🕺🥳🎉, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = ()=>{
    let isDraw = true;
    for(let pattern of winPatterns){
        // console.log(pattern[0],
        //     pattern[1],
        //     pattern[2])
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let pos1value = boxes[pattern[0]].innerText;
            let pos2value = boxes[pattern[1]].innerText;
            let pos3value = boxes[pattern[2]].innerText;

            if(pos1value!=="" && pos2value !=="" && pos3value!==""){
                if(pos1value === pos2value && pos2value === pos3value){
                    // console.log("Winner",pos1value)
                    showWinner(pos1value);
                    return;
                }
            }
    }
    boxes.forEach((box) =>{
        if(box.innerText === ""){
            isDraw = false;
        }
    })
    if (isDraw){
        showDraw();
    }
}
const showDraw = () => {
    msg.innerText = "It's a Draw! 😅";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)




