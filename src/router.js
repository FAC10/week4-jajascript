var handler = require('./handler.js');
var algorithm = require('./algorithm.js');

module.exports = function(req, res) {
  var endpoint = req.url;
  if (endpoint === '/') {
    handler.serveHome(req, res);
  }
  else if (endpoint.indexOf('search') !== -1) {
    algorithm.serveHints(req, res);
  }
  else {
    handler.servePublic(req,res);
  }
}
