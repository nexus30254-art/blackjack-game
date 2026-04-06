let player = {
  name: "Adil",
  chips: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = " "
let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sumel")
let cardEl = document.getElementById("cardsel")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function randomNumber(){
  let random = Math.floor(Math.random()* 13) + 1
    if (random > 10 ){
    return 10
  }
  else if(random === 1){
    return 11
  }
  else{
    return random
  }

}

function startGame(){
let firstCard = randomNumber()
let secondCard = randomNumber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
  renderGame()
}

function renderGame(){
  cardEl.textContent = "Cards: "
  for(let i=0; i< cards.length; i++){
    cardEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum<=20){
    message = "Do you want to draw a card"
    isAlive = true
  }else if(sum===21){
    message = "whooo!!! you got black jack"
    hasBlackJack = true
    isAlive = true
  }else{
    message = "You're out of the game"
  isAlive = false
  }
  messageEl.textContent = message
}  
function card(){
  if(isAlive === true && hasBlackJack === false){
  let thirdCard = randomNumber()
  sum += thirdCard
  cards.push(thirdCard)
  renderGame()
}
}

