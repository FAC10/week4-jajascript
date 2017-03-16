var fs = require('fs');
var path = require ('path');

var algorithm = module.exports = {};

algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  console.log(1, 2, 3, endpoint);
  readFile(res, endpoint)
};
