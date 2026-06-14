let boxes = document.querySelectorAll(".Box");
let reset_btn = document.querySelector('#reset')
let newGamebtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')
let turn = true; // Player x , playero

f
const resetGame = () => {
    turn = true
    enablebox();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn == true) {
            box.innerText = 'X'
            box.style.color = 'red'
            turn = false;
        }
        else {
            box.innerText = 'O'
            turn = true;
        }
        box.disabled = true
        ckeckWiner();
    })

})
const disbalbox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `winner is ${Winner}`;
    disbalbox();
}

const ckeckWiner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != 3) {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1)
                showWinner(pos1);
                return 

            }

        }
    }
    checkDraw();
}
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") 
            return; 
    }
    msgContainer.classList.remove("hide");
    msg.innerText = "It's a Draw!";
}

newGamebtn.addEventListener('click', resetGame)
reset_btn.addEventListener('click', resetGame)
