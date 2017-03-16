var fs = require('fs');
var path = require ('path');

var algorithm = module.exports = {};

algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  var obj;
  console.log(1, 2, 3, endpoint);
  fs.readFile('src/data.json','utf8', function(err,data) {
    if (err) throw err;
    obj=data;
    });
    console.log(obj);
  }
