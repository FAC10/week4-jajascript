# Nobel Prize Laureates Autocomplete

### User Story v.1.0 ###
I would be able to input text into a text input field which will give me back sensible suggestion as I type.

### User Story v.1.1 ###
The user should be able to enter a string into an input box which gives back a list of Nobel prize laureates, so that they can easily search for people who have won the Nobel prize

## Our Approach
  First we thought about the overall structure of our code, including:
  * Modularisation
  ![Diagram of architecture](architecture-diagram.png)

  * Testing
  * File Structure
  * Deploying on Heroku


Technical spike: we researched whether we'd want to keep our data in the backend or make a call to an API, along with which data we'd use/ what the function of our autocomplete would be.

Outcome: we'd use our own object with our own data structure in the backend

### Things we learnt
  * regex isn't just for codewars
  * JSON objects - be mindful when using them

Outcome:
An autocomplete app which returns a list of nobel prize laureates which is informed by the user's input. Our master branch automatically deploys to heroku.


** Pending: learnings on handling JSON object & heroku logs **

## Installation instructions

 - Clone this repo and cd into it

 - `git clone git@github.com:FAC10/week4-jajascript.git`

 - Run `npm install` to install all dependencies

 - Run `npm run devStart` to start the server using nodemon (which will automatically restart Node when changes are detected in your files)

 - Navigate to http://localhost:4000/ in your browser
