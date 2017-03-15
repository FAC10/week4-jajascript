var userInput = '';

function getUserInput(event){
  event.preventDefault();
  console.log(event.key);
  userInput += event.key;
  console.log(userInput);
}

 document.querySelector('#form').addEventListener('keyup', getUserInput);
