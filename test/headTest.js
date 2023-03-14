const assert = require ('chai').assert;
const head = require('../head');

    describe('#head', function() {
        it('returns 1 for [1, 2, 3]', function () {
            assert.strictEqual(head([1,2,3]), 1);
        }) ;
        it("it returns '5' for ['5']", function() {
            assert.strictEqual(head(['5']), '5');
        });
        it('it returns 5 when passed [5,6,7]', function() {
            assert.strictEqual(head([5,6,7]), 5);
        });
        it('it returns hello when passed [hello, lighthouse, labs]', function() {
            assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
        });
    });