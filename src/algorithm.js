var fs = require('fs');
var path = require ('path');

var algorithm = module.exports = {};

var obj;
fs.readFile('src/data.json','utf8', function(err,data) {
  obj=data;
});

function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    console.log(objects);
    return objects;
}

algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  getValues(obj, 'firstname');
}
