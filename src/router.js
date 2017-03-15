var handler = require('./handler.js');

var routes = {
  '/': handler.home,
  '404': handler.notFound
}

module.exports = function(req, res) {
  var endpoint = req.url;
  if (routes[endpoint]) {
    routes[endpoint](req, res);
  }
  else {
    routes[404](req, res);
  }
}
