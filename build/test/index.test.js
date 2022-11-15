"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const isEven = (n) => n % 2 === 0;
const isPositionEven = (_, i) => i % 2 === 1;
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
//# sourceMappingURL=index.test.js.map