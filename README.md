# Matchmaker MatchMaker Make Me a Match

This is a version of the MEMORY card game. This game tests a user's short term memory where they need to match pairs of famous paintings by turning over 2 cards at a time.

![MemGameSS](https://user-images.githubusercontent.com/110546643/190951821-40b8c7f9-c5ad-4598-a5d5-35609beb3791.JPG)

##Challenge
* YOU WIN, if you can match all the pairs under 30 seconds
* YOU LOSE, if you time runs out.

##Instructions
* Gameplay and Timer countdown begins when user clicks on ANY card to flip it over to see the painting.
* You are allowed to 2 flips on 2 different cards
* If they match, the cards stay face up
* If they dont match, the cards chosen rotate and go back to being face down.
* Match all the pairs before TIME runs out. 

## How I built this version of the Memory Game
This game was constructed using vanilla Javascript, CSS, and HTML.

* created an array of cards that gets shuffled every time the game is started or reset
* created a counter that counts the number of flips made by the player*
* created a timer to make it a challenge
* created a rotation animation on the cards that were selected that didnt pair up, this eats up a fraction of time. 
