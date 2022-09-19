//setup dom class elements to assigned variables for manipulation
const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");
// setup global variables
let maxTime = 30;        // start time for timer countdown
let timeLeft = maxTime;  // updated time after timer starts in DOM
let flips = 0;           // number of cards clicked
let matchedCard = 0;     // keep track of matched pairs
let disableDeck = false; // locks the board to prevent clicking additional cards before first pair fnishes matching or finishes unflipping
let isPlaying = false;   // locks the board until the user clicks on a card to start the game
let cardOne, cardTwo;    // cardone represents 1st card clicked, cardTwo represents second card clicked,
let timer;               // will be used with setInterval to repeatedly call a function with a delay                              

function initTimer() 
{
    if(timeLeft <= 0) // if no time left, you lost message pops up
    {
        showAlertLoss();
        return clearInterval(timer);  // cancels out setInterval method(timer) after timer reaches 0
        
    }
    timeLeft--;  // minus 1 each interval 
    timeTag.innerText = timeLeft; // update time tag in DOM
}



function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000); // repeatedly calls initTimer function with 1 second delay
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0)
     {
        flips++; // flip count adds 1
        flipsTag.innerText = flips;  // updates flips in DOm
        clickedCard.classList.add("flip");  // adds a flip class allowing card that is clicked to rotate to see the painting image
        if(!cardOne) 
        {
            // return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true; // locks the deck so no cards can be clicked to turn over
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg); // check to see if cards match
    }
}
// fucntion to display message YOU WIN after all matches are found
function showAlert()
{
    
    var myText = "You WIN";
    alert(myText);
}
//function to display YOU LOST after timer runs out
function showAlertLoss()
{
    var myText = 'You LOST!';
    alert(myText);
}
function matchCards(img1, img2) {
    if(img1 === img2) // if two card's images matched
    {
        matchedCard++;   // increments matched pair valus by 1
        // if matched value = 6 and there is still time on the clock,  it means all the pairs have been found in time
        if(matchedCard == 6 && timeLeft > 0) {
            // run the Win alert with a half second delay
            setTimeout(() =>{
                showAlert();},500);

            return clearInterval(timer);
        }
        /* if two cards match, remove the click event listener from these cards
        so the user cant click them again     */
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    else //if the cards dont match, it eats up about 2 seconds for the animation
    {
    setTimeout(() => 
    {   // add a full 360 degrees rotate class to make the cards that dont match rotate for 500ms (about half a second)
        cardOne.classList.add("rotate");
        cardTwo.classList.add("rotate");
    }, 500);

    setTimeout(() =>
     { // remove both rotate and flip classes after 1500ms (about 1.5 seconds)
        cardOne.classList.remove("rotate", "flip");
        cardTwo.classList.remove("rotate", "flip");
        cardOne = cardTwo = ""; // setting both card values to blank
        disableDeck = false;
    }, 1500);
}
}

function shuffleCard() // reset all variables to initial default values
{
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;
    // create an array of 12 items with 6 doubles of matching value from 1 to 6
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // sorting array items randomly

    cards.forEach((card, index) => {
        card.classList.remove("flip"); // removing flip class from all cards and passing random image to each card
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img${arr[index]}.jpg`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}


shuffleCard(); // activates automatically when user refreshes the webpage

refreshBtn.addEventListener("click", shuffleCard); //activates shuffleCard function with a click button at any time the reset button is clicked

// adding click event to all cards
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
