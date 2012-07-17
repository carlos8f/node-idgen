var idgen_hex = require('../').hex
  , assert = require('assert')
  ;

describe('idgen_hex', function() {
  it('creates unique hex IDs', function(done) {
    var ids = [], id;
    function nextTest() {
      id = idgen_hex(7);
      assert.strictEqual(typeof id, 'string', 'id is string');
      assert.strictEqual(id.indexOf('undefined'), -1, 'no "undefined" in id');
      assert.strictEqual(ids.indexOf(id), -1, 'id is unique');
      assert.ok(id.match(/^[0-9a-f]{7}$/), 'id is hex and correct length');
      ids.push(id);

      if (ids.length === 5000) {
        done();
      }
      else {
        process.nextTick(nextTest);
      }
    }
    nextTest();
  });
});