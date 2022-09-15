/*important variables hasFlippedCard, firstCard, secondCard,cards*/ 
/* for the flip effect on the memory card */
const cards = document.querySelectorAll('.memory-card');
/* when a player clicks a card we have to know if its the first or second card hes flipped   */ 
let hasFlippedCard = false;
let firstCard,secondCard;
let lockBoard = false; // we need this variable for bugs if a player tries to flip many cards at once, preventing a crash

/*  FLIP THE CARDS function */
function flipCard()
{
if (lockBoard) return; // if its true, return so the rest doesnt get executed.

    /*this.classList.toggle('flip')*/ /*The toggle() method of the DOMTokenList interface removes
                                     an existing token from the list and returns false. If the token
                                      doesn't exist it's added and the function returns true.*/
    this.classList.add('flip') /* update toggle to add and add a condition*/
    if(!hasFlippedCard)  /* first card clicked means this is the first time a player has clicked a card*/
    {
        hasFlippedCard = true;
        firstCard = this; /* this is the element that fired the event, the memory card is the element in this case. */
    /*   console.log({hasFlippedCard,firstCard})     to test if its works by clicking a card and looking at console result*/
    }
        
    else  //second card clicked
    {
        hasFlippedCard = false;
        secondCard = this;
      //  console.log({firstCard,secondCard}); //check to see if both cards are set to true in console after both cards are clicked in DOM
        // check to see if cards match after they both been flipped, add data attribute in html to each image element.
       
    // do cards match? console.log to check if we can identify our cards
    // by its dataset
//console.log(firstCard.dataset.framework);
//console.log(secondCard.dataset.framework);
        checkForMatch();
    }
}
// matching logic method
function checkForMatch()
{
           // check to see if both cards match, remove eventlister from the cards
        // to prevent from them being clicked again
        if(firstCard.dataset.framework === secondCard.dataset.framework)
        {
        disabledCards();
        }
         else
        { // else if not a match, flip back to original face down state
          // need to add a settime out so we can see the card flip back to original state if it doesnt match, otherwise its too fast to see and we dont see the flip part
        unflipCards();

        }
 // removes cards from being flipped 
function disabledCards()
{
    
    {
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
}
// flips cards back to face down with a timeout so we can see it, otherwise its too fast to see the flip back state
function unflipCards()
{
    lockBoard = true; // locks cards only after cards have been flipped
    setTimeout(() => {    
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}

}
cards.forEach(card => card.addEventListener('click', flipCard));
