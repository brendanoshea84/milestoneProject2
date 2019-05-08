var finishingRound;
var cardHighLight;
var activeCards;
var roundNumber = 1;
var beginnerMode = true;
var startingCards;
var cardOrder;
var playerOrder;


var cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', turnCard));

function turnCard () {
  this.classList.toggle('flip');
firstCard= this;

  console.log(Card.dataset.cardNumber);
}

//modes

if(beginnerMode === true) {
    startingCards = 2 + (Math.floor(roundNumber % 3));

    cardHighLight = true;
    activeCards = true;
}

    //game card order for all modes
cardOrder = [];
for (var i = 1; i <= 25; i++) {
    cardOrder.push(i);
}
console.log(cardOrder);
console.log(startingCards);



//shuffle cards
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 9);
    card.style.order = randomPos;
  });
})();


//Player pressing the cards
