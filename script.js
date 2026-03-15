const choiceBtns = document.querySelectorAll(".choice-btn");

const playerChoiceText = document.querySelector(".player-choice-text")
const cpuChoiceText = document.querySelector(".cpu-choice-text")

const gameTitle = document.querySelector(".game-title")

const scoreWonText = document.querySelector(".score-won-text")
const scoreDrawText = document.querySelector(".score-draw-text")
const scoreLostText = document.querySelector(".score-lost-text")

let playerResultOutput = ""
let cpuResultOutput = ""

const choiceEmoji = {
    rock: "✊🏾",
    paper: "✋🏾",
    scissors: "✌🏾"

}

choiceBtns.forEach((choiceBtn) => {
    choiceBtn.addEventListener("click", () => {
        choiceBtns.forEach(btn =>{
            btn.style.pointerEvents = "none"
        })
        gameTitle.textContent = "Comrade,Tuguze!!"
        playerChoiceText.textContent = "✊🏾"
        cpuChoiceText.textContent = "✊🏾"
        //  player choice
        playerResultOutput = choiceBtn.value;
        cpuResultOutput = getCpuResultOutput()


            playerChoiceText.classList.add("player-choice-text-anim")
            cpuChoiceText.classList.add("cpu-choice-text-anim")

        setTimeout(() => {
            playerChoiceText.textContent = choiceEmoji[playerResultOutput]
            cpuChoiceText.textContent = choiceEmoji[cpuResultOutput]


            playerChoiceText.classList.remove("player-choice-text-anim")
            cpuChoiceText.classList.remove("cpu-choice-text-anim")

            showResultOfRound()
             choiceBtns.forEach(btn =>{
            btn.style.pointerEvents = "visible"
        })
        }, 2000)

    });
});

function getCpuResultOutput() {
    const cpuOptionChoices = ["rock", "paper", "scissors"]

    const cpuRandomChoice = cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)]
    return cpuRandomChoice;

};

function showResultOfRound() {
    if (playerResultOutput === cpuResultOutput) {
        gameTitle.textContent = "its a Draw!!👌🔥"
        scoreDrawText.textContent++

    } else if (playerResultOutput == "rock" && cpuResultOutput == "scissors" ||
        playerResultOutput == "paper" && cpuResultOutput == "rock" ||
        playerResultOutput == "scissors" && cpuResultOutput == "paper") {
        gameTitle.textContent = "You have Won!!🎉"
        scoreWonText.textContent++
    } else {
        gameTitle.textContent = "You just lost!!😂"
        scoreLostText.textContent++
    }
}

