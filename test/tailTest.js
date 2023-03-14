const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', function() {
    it('should return 6 when passed [2,4,6]', function() {
        assert.equal(tail([2,4,6]),6);
    });
    it('should return 2 when passed [4,8,2]', function () {
        assert.equal(tail([4,8,2]),2);
    });
    it('should return undefined when passed []', function () {
        assert.equal(tail([]),undefined);
    });
    it('should fail when passed [2,4,6]',function () {
        assert.notEqual(tail([2,4,6]),2);
    });
});