# Matchmaker MatchMaker Make Me a Match

This is a version of the MEMORY card game. This game tests a user's short term memory where they need to match pairs of famous paintings by turning over 2 cards at a time.

![image](https://user-images.githubusercontent.com/110546643/190964672-03b94dbb-b662-4af3-a32d-65d1ff2d6053.png)



##
The paintings included for this game:
* Mona Lisa by Leonardo da Vinci, 1503
* Self Portrait by Vincent van Gogh, 1889 
* Girl with a Pearl Earring by Johannes Vermeer, 1665
* Starry Night by Vincent van Gogh, 1889
* American Gothic by Grant Wood, 1930
* Salvator Mundi by Leonardo da Vinci, 1500

## Challenge
* YOU WIN, if you can match all the pairs under 30 seconds
* YOU LOSE, if time runs out.

## Instructions
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
