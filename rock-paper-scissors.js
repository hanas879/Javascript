const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()

  if(userInput === "rock") {
    return userInput
  } else if(userInput === "paper") {
    return userInput
  } else if(userInput === "scissors") {
    return userInput
  } else if(userInput === "bomb") {
    return userInput
  } else {
    console.log("Oh no.... An error has occurred")
  }
}


function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)

  if(randomNumber === 0) {
    return "rock"
  } else if(randomNumber === 1) {
    return "paper"
  } else if(randomNumber === 2) {
    return "scissors"
  } else {
    console.log("Oh no.... An error has occurred")
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return "The game was a tie!"
  }

  if(userChoice === "rock") {
    if(computerChoice === "paper") {
      return "Winner: Computer"
    } else {
      return "Winner: Human"
    }
  }

  if(userChoice === "paper") {
    if(computerChoice === "rock") {
      return "Winner: Human"
    } else {
      return "Winner: Computer"
    }
  }

  if(userChoice === "scissors") {
    if(computerChoice === "rock") {
      return "Winner: Computer"
    } else {
      return "Winner: Human"
    }
  }
  if(userChoice === "bomb") {
    return "Winner: Human"
  }
}

function playGame() {
  let userChoice = getUserChoice("RoCk")
  let computerChoice = getComputerChoice()

  console.log(userChoice)
  console.log(computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
