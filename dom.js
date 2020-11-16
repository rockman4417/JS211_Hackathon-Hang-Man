const randomWordArray = ["reinforce", "apparatus", "monstrous", "polish", "honest", "cupboard", "cabinet", "push", "false", "perceive", "effort", "format", "inflation", "change", "employ", "abolish", "rice", "debt", "weigh", "looting", "lace", "petty", "liability", "atmosphere", "directory", "sample", "feign", "fence", "calendar", "laundry", "strikebreaker", "meet", "distant", "prospect", "problem", "danger", "organ", "autonomy", "lake", "proud", "is", "scale", "total", "week", "vain", "sense", "haircut", "mouse", "speaker", "thanks"]
let dashArray = []
let remainingLetters
let guessCount
let wordArray

//DOM Stuff
let wordArrayDiv = document.getElementById("word-array")
let dashArrayDiv = document.getElementById("dash-array")
let promptDiv = document.getElementById("prompt")
let guessInputDiv = document.getElementById("guess-input")
let guessCountDiv = document.getElementById("guess-count")

//DOM HANGMAN GRAPHIC STUFF
let hangManGraphic = document.getElementsByClassName("hangman-line")
console.log(hangManGraphic)

const hangTheMan = () => {
    for(let i = 0; i < hangManGraphic.length; i ++) {
        if(parseInt(hangManGraphic[i].id) === (7 - guessCount)) {
            let line = hangManGraphic[i]
            line.setAttribute("stroke", "red")
        }
    }
}

const createWord = () => {
    wordArray = randomWordArray[Math.floor(Math.random() * randomWordArray.length)].split('')
    dashArray = wordArray.map(index => index = "_")
    console.log(wordArray)
    wordArrayDiv.innerHTML = wordArray.join("")
    dashArrayDiv.innerHTML = dashArray.join(" ")
    console.log(`dash array ${dashArray}`)
    remainingLetters = wordArray.length
    guessCount = 0
}

//INNER LOGIC
const checkGuess = (guess) => {
    let currentRemainingLetters = remainingLetters
    if(guess.length !== 1) {
        console.log("enter a single digit son!")
    } else {
        for(let i = 0; i < wordArray.length; i ++) {
                if(wordArray[i] === guess && dashArray[i] === "_") {
                dashArray[i] = guess
                remainingLetters --
            }
        }
        if(currentRemainingLetters === remainingLetters) {
            guessCount ++
            
        }
        console.log(`remaining letters ${remainingLetters}`)
        console.log(`guess count ${guessCount}`)
        guessCountDiv.innerHTML = `${7 - guessCount} TRIES BEFORE YOU DIE!`
    }
}

const checkForWin = () => {
    if(remainingLetters === 0) {
        let word = wordArray.join("")
        console.log("Good job! The answer was " + word)
        promptDiv.innerHTML = "GOOD JOB!  THE ANSWER WAS " + word
        return true
    } else if (guessCount >= 7) {
        console.log("youre dead son!")
        promptDiv.innerHTML = "YOU'RE DEAD SON!"
        return true
    } else {
        console.log("no winner or loser")
        promptDiv.innerHTML = "ENTER ANOTHER GUESS SONNY!"
        return false
    }
}

const checkButtonClick = () =>  {
        checkGuess(guessInputDiv.value.toLowerCase());
        hangTheMan()
        console.log(dashArray.join(" "))
        dashArrayDiv.innerHTML = dashArray.join(" ")
        checkForWin();
    }

const startGame = () =>{
    createWord();
}

startGame()
