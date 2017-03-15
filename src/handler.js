var fs = require('fs');
var path = require ('path');

var handler = module.exports = {};

handler.home = function(req, res){

};

handler.notFound = function (req, res){
  res.writeHead(404,{'Content-Type': 'text/html'});
  res.write('<h1>404 Page Requested Cannot Be Found<h1>');
  res.end();
};
