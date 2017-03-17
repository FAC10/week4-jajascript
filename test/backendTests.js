var test = require('tape');
var algorithm = require('../src/algorithm.js');
var obj = require('../src/data.json');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('a message to print out on success');
  t.end();
});

test ('Check if getValues returns a function', function (t){
  var searchString = "a";
  t.equal(algorithm.getValues(obj, "firstname") instanceof Array, true, 'yayy' );
  t.end();
});

test('Check if autocomplete function returns an array', function (t) {
  var arr = ['a', 'b'];
  var searchString = "a";
  t.equal(algorithm.autocomplete(arr, searchString) instanceof Array, true, 'Comparing the result value types');
  t.equal(algorithm.autocomplete(arr, searchString).length, 1, 'Comparing the result value types');
  t.end();
});
