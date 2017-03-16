var userInput = '';

function getUserInput(event){
  event.preventDefault();
  console.log(event.target.value);
  console.log('Heroku is working - wooWooWoo');
}

 document.querySelector('#form').addEventListener('keyup', getUserInput);
