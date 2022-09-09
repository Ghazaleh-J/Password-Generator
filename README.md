# Password Generator
## Description
With  the starter code on hand, in order to generate random password, I've written two functions:

1. userSelection function: in this fuunction, I asked the user about password criteria. 
- About the password length, I did window.prompt, and by using if statements, I asked them to just enter a number between 8 & 128
- About the types of characters, I did window.confirm, and by using if statement, I added their sellected options to the possibleOptions
- The user must choose at least one type of characte, and I set that by using if statement & window.alert

2. generatePassword function: Then based on the userSelection, this function generate a random password, and for that I used forLoop 

## Criteria
* By clicking the button to generate a password
* You're presented with a series of prompts for password criteria
* When prompted for password criteria
* You select which criteria to include in the password
* When prompted for the length of the password
* You choose a length of at least 8 characters and no more than 128 characters
* When asked for character types to include in the password
* You confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* When you answer each prompt
* Your input should be validated and at least one character type should be selected
* When all prompts are answered
* A password is generated that matches the selected criteria
* When the password is generated
* The password is either displayed in an alert or written to the page

## Application Preview
![alt text](/SitePreview.png)