var userInput = '';
var form = document.getElementById('form');

form.addEventListener('keypress', function(e) {
  var regex = '[?<>=+()*&^%$£@!#:;``~{}\[|_\\\]]';
  if (e.key.match(regex)) {
    e.preventDefault();
  }
});

form.addEventListener('keyup', function(e){
fetchRequest("GET", getDataUrl(getUserInput(e)), appendData);
});

function appendData(data) {
    var dataList = document.getElementById('nobel-people');
    dataList.innerHTML = '';

    data.forEach(function(val) {
      var option = document.createElement('li');
      option.className += 'option-li';
      var aLink = document.createElement('a');
      aLink.className += 'option-a';
      var googleLink = document.getElementsByTagName('a').href;
      googleLink = 'http://google.com/search?q=' + encodeURI(val);
      option.value = val;
      option.innerHTML = val;
      dataList.appendChild(aLink);
      aLink.appendChild(option);
      aLink.href = googleLink;
      aLink.target = "_blank";

  });
}


function getUserInput(event){
  userInput = event.target.value;
  return userInput;
  }

function getDataUrl(userInput){
  var url = 'search/' + userInput;
  return url;
}


function fetchRequest(method, url, cb){
  method = form.method;
  var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 & xhr.status === 200){
      cb(JSON.parse(xhr.responseText));
    } else {
      console.log('Waiting for response');
    }
  };
xhr.open(method, url, true);
xhr.send();
}
