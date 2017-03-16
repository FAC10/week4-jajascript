var userInput = '';

function getUserInput(event){
  event.preventDefault();
  console.log(event.target.value);
  console.log('Is Heroku working?!');
}

 document.querySelector('#form').addEventListener('keyup', getUserInput);
