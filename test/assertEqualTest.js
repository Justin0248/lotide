const assertEqual = require('../assertEqual');
const assert = require('chai').assert

describe('#assertEqual', function () {
    it('should reuturn false when passed Bootcamp', function() {
        assert.equal(assertEqual('Lighthouse Labs', 'Bootcamp'));
    }) ;
    it('should return true when passed 1', function () {
        assert.equal(assertEqual(1,1));
    });
    it('should return true when passed no',function () {
        assert.equal(assertEqual('no', 'no'));
    });
    it('should return false when passed 2', function() {
        assert.equal(assertEqual(1, 2));
    })
})