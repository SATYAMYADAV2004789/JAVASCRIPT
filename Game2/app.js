let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll('.choice');
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        userchoices = choice.getAttribute("id")
        playGame(userchoices)

    })
})


const genCommChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rendIdx = Math.floor(Math.random() * 3);
    return option[rendIdx]
}
const drawGame = () => {
    document.querySelector("#msg").innerHTML = "game was drawn"

}
const showWinner = (userWiner, userchoices, compchoices) => {
    if (userWiner) {
        userscore++;
        userScorePara.innerText = userscore;
        document.querySelector("#msg").innerHTML = `you win! Your ${userchoices} beats ${compchoices}`
        document.querySelector("#msg").style.color = "green"
    }
    else {

        compscore++;
        compScorePara.innerText = compscore;
        document.querySelector("#msg").innerHTML = `you lose.${compchoices} beats your ${compchoices}`
    }
}
const playGame = (userchoices) => {
    const compchoices = genCommChoice();
    if (userchoices === compchoices) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoices === "rock") {
            userwin = compchoices === "paper" ? false : true
        }
        else if (userchoices === 'paper') {
            userwin = compchoices === "scissors" ? false : true
        }
        else {
            userwin = compchoices === "rock" ? false : true
        }
        showWinner(userwin, userchoices, compchoices);
    }

}


