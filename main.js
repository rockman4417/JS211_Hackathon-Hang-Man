const randomWordArray = ["dick"]
let dashArray = []
let remainingLetters
let guessCount
let wordArray

const createWord = () => {
    wordArray = randomWordArray[Math.floor(Math.random() * randomWordArray.length)].split('')
    dashArray = wordArray.map(index => index = "_")
    console.log(wordArray)
    console.log(`dash array ${dashArray}`)
    remainingLetters = wordArray.length
    guessCount = 0
}

const checkGuess = (guess) => {
    let currentRemainingLetters = remainingLetters
    if(guess.length !== 1) {
        alert("enter a single digit son!")
    } else {
        for(let i = 0; i < wordArray.length; i ++) {
                if(wordArray[i] === guess) {
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
        alert("Good job! The answer was " + word)
        return true
    } else if (guessCount === 7) {
        remainingLetters = 0;
        alert("youre dead son!")
        return true
    } else {
        console.log("no winner or loser")
        return false
    }
}

const hangMan = () => {
    createWord();
    while (!checkForWin()) {
     
        alert(dashArray.join(" "))
        let guess = prompt("guess a letter.")
        checkGuess(guess)
    };
}

hangMan()



