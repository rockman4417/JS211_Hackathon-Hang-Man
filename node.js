const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


const randomWordArray = ["reinforce", "apparatus", "monstrous", "polish", "honest", "cupboard", "cabinet", "push", "false", "perceive", "effort", "format", "inflation", "change", "employ", "abolish", "rice", "debt", "weigh", "looting", "lace", "petty", "liability", "atmosphere", "directory", "sample", "feign", "fence", "calendar", "laundry", "strikebreaker", "meet", "distant", "prospect", "problem", "danger", "organ", "autonomy", "lake", "proud", "is", "scale", "total", "week", "vain", "sense", "haircut", "mouse", "speaker", "thanks"]
let dashArray = []
let remainingLetters
let guessCount
let wordArray

const createWord = () => {
    wordArray = randomWordArray[Math.floor(Math.random() * randomWordArray.length)].split('')
    dashArray = wordArray.map(index => index = "_")
    console.log(wordArray.join(" "))
    console.log(dashArray.join(" "))
    remainingLetters = wordArray.length
    guessCount = 0
}

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

    }
}

const checkForWin = () => {
    if(remainingLetters === 0) {
        let word = wordArray.join("")
        console.log("Good job! The answer was " + word)
        return true
    } else if (guessCount >= 7) {
        console.log("youre dead son!")
        return true
    } else {
        console.log("no winner or loser")
        return false
    }
}

const getPrompt = () =>  {
    rl.question('guess: ', (guess) => {
        console.clear()
        checkGuess(guess);
        console.log(wordArray.join(" "))
        console.log(dashArray.join(" "))
        if(!checkForWin()){
            getPrompt();
        } 
        rl.question('play again?: ', (answer) => {
            console.clear()
            setTimeout(function(){startGame()}, 1000);
        })
    });
}

const startGame = () =>{
    console.log("New Game!")
    createWord();
    getPrompt()
}

startGame()



