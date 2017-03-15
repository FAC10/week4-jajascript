var handler = require('./handler.js');

module.exports = function(req, res) {
  var endpoint = req.url;

  console.log('------->', endpoint);

  if (endpoint === '/') {
    handler.serveHome(req, res);
  } else {
    handler.servePublic(req,res);
  }
}
