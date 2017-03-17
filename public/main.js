var userInput = '';
var form = document.getElementById('form');

form.addEventListener('keypress', function(e) {
  var regex = '[?<>=+()*&^%$£@!#:;``~{}\[|_\\\]]';
  if (e.key.match(regex)) {
    e.preventDefault();
  }
});

form.addEventListener('keyup', function(e){
fetchRequest(form.method, getDataUrl(getUserInput(e)));
});


function getUserInput(event){
  userInput = event.target.value;
  return userInput;
  }

function getDataUrl(userInput){
  var url = 'https://nobel-laureate-autocomplete.herokuapp.com/search/' + userInput;
  console.log(url);
  return url;
}


function fetchRequest(method, url, cb){
  method = form.method;
  var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 & xhr.status === 200){
      cb(xhr.responseText);
    } else {
      console.log('Waiting for response');
    }
  };
xhr.open(method, url, true);
xhr.send();
}
