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
    if(!hasFlippedCard)  /* means this is the first time a player has clicked a card*/
    {
            // first card clicked
        hasFlippedCard = true;
        firstCard = this; /* this is the element that fired the event, the memory card is the element in this case. */
     /*   console.log({hasFlippedCard,firstCard})     to test if its works by clicking a card and looking at console result*/
    
     } else
            //second card clicked
    {
        hasFlippedCard = false;
        secondCard = this;
        console.log({firstCard,secondCard}); //check to see if both cards are set to true in console after both cards are clicked in DOM
    }
    }


                                    

cards.forEach(card => card.addEventListener('click', flipCard));
