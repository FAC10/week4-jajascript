// Test to check QUnit is working
// QUnit.test('1 + 1 equals 2', function(assert) {
//   assert.equal(add(1, 1), 2, '1 + 1 should equal 2');
// });

  QUnit.test('Test that getDataUrl returns correct URL', function(assert) {
    assert.equal(getDataUrl('barack'), 'http://localhost:4000/search/barack', 'Yay, our test works!');
  });

  QUnit.test('Test that getUserInput returns correct userInput', function(assert) {
      var event = {
        target: {
          value: 'bar'
        }
      }
      assert.equal(getUserInput(event), 'bar', 'Yay, our test works!');
    });
