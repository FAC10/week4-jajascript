var userInput = '';
var form = document.getElementById('form');

form.addEventListener('keyup', function(e){
fetchRequest(getDataUrl(getUserInput(e)));
});


function getUserInput(event){
  console.log(event);// userInput = event.target.value;
  var key = event.key;
  console.log(key.match(/[a-z,0-9]{1}/i));
  if (key.match(/\w{1}/i)) {
  // if (key.charCodeAt() > 96 && key.charCodeAt() < 123) {
    userInput+=key;
  }
  else {
    userInput=userInput;
  }
  console.log(key, userInput);
  return userInput;
  }

  function getDataUrl(userInput){
    var url = 'https://nobel-laureate-autocomplete.herokuapp.com/' +  userInput;
    // fetchRequest("GET", url);
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
