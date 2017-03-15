var userInput = '';

function getUserInput(event){
  event.preventDefault();
  console.log(event.target.value);
}

 document.querySelector('#form').addEventListener('keyup', getUserInput);
