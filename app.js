/*important variables hasFlippedCard, firstCard, secondCard,cards*/ 
/* for the flip effect on the memory card */
const cards = document.querySelectorAll('.memory-card');
/* when a player clicks a card we have to know if its the first or second card hes flipped   */ 
let hasFlippedCard = false;
let firstCard,secondCard;

/* add the function for flipCard */
function flipCard()
{

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
        console.log({firstCard,secondCard}); //check to see if both cards are set to true in console after both cards are clicked in DOM
        // check to see if cards match after they both been flipped, add data attribute in html to each image element.
       
    // do cards match? console.log to check if we can identify our cards
    // by its dataset
//console.log(firstCard.dataset.framework);
//console.log(secondCard.dataset.framework);
        // check to see if both cards match, remove eventlister from the cards
        // to prevent from them being clicked again
if(firstCard.dataset.framework === secondCard.dataset.framework)
{
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click', flipCard);
}
 // else if not a match, flip back to original face down state
else
{// need to add a settime out so we can see the card flip back to original state if it doesnt match, otherwise its too fast to see and we dont see the flip part
setTimeout(() => {    
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}, 1500);


}



    }


                                    
}
cards.forEach(card => card.addEventListener('click', flipCard));
