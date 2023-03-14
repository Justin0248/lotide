const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', function () {
    it('should return an empty array when passed [3]', function() {
        assert.equal(middle([3]), []);
    });
    it('should return an empty array when passed [3,4]', function() {
        assert.equal(middle([3,4]), []);
    });
    it('should return 4 when passed [2,4,6]',function() {
        assert.equal(middle([2,4,6]), 4);
    })
    it('should return 3 when passed [1,3,2]', function() {
        assert.equal(middle([1,3,2]), 3)
    })
    it('should return [2,3] when passed [1,2,3,4]', function() {
        assert.equal(middle([1,2,3,4]), [2,3]);
    });
});