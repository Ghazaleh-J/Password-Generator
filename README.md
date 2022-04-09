# Homework-3
With  the starter code on hand, in order to generate random password, I've written two functions:

1. userSelection function: in this fuunction, I asked the user about password criteria. 
- About the password length, I did window.prompt, and by using if statements, I asked them to just enter a number between 8 & 128
- About the types of characters, I did window.confirm, and by using if statement, I added their sellected options to the possibleOptions
- The user must choose at least one type of characte, and I set that by using if statement & window.alert

2. generatePassword function: Then based on the userSelection, this function generate a random password, and for that I used forLoop 