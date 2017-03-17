var obj = require('./data.json');
var fs = require('fs');
var path = require ('path');
var algorithm = module.exports = {
  autocomplete: autocomplete,
  getValues: getValues
};

algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  var searchString = endpoint.split('\/search\/')[1];
  var arr = getValues(obj, 'firstname');
  var result = autocomplete(arr, searchString);
 res.writeHead(200, { "Content-Type": 'text/plain'});
 res.end(JSON.stringify(result));
};

function getValues(obj, key){
    var arr = obj.map(a=>`${a.firstname.toLowerCase()} ${a.surname.toLowerCase()}`);
    return arr;
}

function autocomplete(arr, searchString) {
  var autocompleteOptions = [];
  for (i = 0; i < arr.length; i++) {
    if (searchString === arr[i].slice(0, searchString.length) && autocompleteOptions.length <10) {
      autocompleteOptions.push(arr[i]);
    }
  }
  return autocompleteOptions;
}
