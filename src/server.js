var http = require('http');
var router = require('./router.js');
var app = function(req, res){
  router(req,res);
};

var port = process.env.PORT || 4000;
var server = http.createServer(app).listen(port);
console.log(`Server is listening on port: ${port}`);
