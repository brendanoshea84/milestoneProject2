
let finishingRound;
let cardHighLight;
let activeCards;
let roundNumber = 1;
let beginnerMode = true;

//modes

if(beginnerMode === true) {
    let startingCards = 3 + (floor.Math(3 % roundNumber()));
    cardHighLight = true;
    activeCards = true;
};

    

//game card order for all modes
const cardOrder = [];
for (var i = 1; i <= 25; i++) {
    cardOrder.push(i);
}
console.log(cardOrder);
console.log(startingCards);

//Player pressing the cards


function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });