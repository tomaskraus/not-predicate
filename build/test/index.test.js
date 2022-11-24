"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const isEven = (n) => n % 2 === 0;
const isPositionEven = (_, i) => i % 2 === 1;
const customThis = {
    myProp: 'hereIAm',
};
function isIndexEqualThreeAndThisObjectHasMyPropDefined(_, index) {
    if (this) {
        return index === 3 && this['myProp'] === 'hereIAm';
    }
    return false;
}
test('Negates the predicate.', () => {
    expect([1, 2, 2, 3].map((0, index_1.not)(isEven))).toEqual([true, false, false, true]);
});
test('Negates the predicate that uses index argument.', () => {
    expect([1, 2, 2, 3].map((0, index_1.not)(isPositionEven))).toEqual([
        true,
        false,
        true,
        false,
    ]);
});
test('Double negation cancels itself.', () => {
    const nums = [1, 2, 2, 3];
    expect(nums.map((0, index_1.not)((0, index_1.not)(isEven)))).toEqual(nums.map(isEven));
});
test('deals with this', () => {
    // without explicit this
    expect([2, 4, 3, 5, 0, 3, 3].filter((0, index_1.not)(isIndexEqualThreeAndThisObjectHasMyPropDefined))).toEqual([2, 4, 3, 5, 0, 3, 3]);
    expect([2, 4, 3, 5, 0, 3, 3].filter((0, index_1.not)(isIndexEqualThreeAndThisObjectHasMyPropDefined), customThis)).toEqual([2, 4, 3, 0, 3, 3]);
});
//# sourceMappingURL=index.test.js.map