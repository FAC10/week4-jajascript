var fs = require('fs');
var path = require ('path');
var algorithm = module.exports = {};
var obj = require('./data.json');
var arr;
var searchString;

algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  searchString = endpoint.split('\/search\/')[1];
  var result = getValues(obj, 'firstname');
console.log(result);
   res.writeHead(200, { "Content-Type": 'text/plain'});
   res.end(JSON.stringify(result));
}

function getValues(obj, key){
    arr = obj.map(a=>`${a.firstname.toLowerCase()} ${a.surname.toLowerCase()}`);
    return autocomplete(searchString);
}

function autocomplete(searchString) {
  var autocompleteOptions = [];
  for (i = 0; i < arr.length; i++) {
    if (searchString === arr[i].slice(0, searchString.length) && autocompleteOptions.length <10) {
      autocompleteOptions.push(arr[i]);
    }
  }
  return autocompleteOptions;
}
