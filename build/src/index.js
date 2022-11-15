"use strict";
/*
 * Predicate negation. Suitable for RxJS, IxJS, Array.filter and others.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
/**
 * @template T The type of input value.
 * @param {(value: T, index: number) => boolean} predicate Original predicate. A function to test a value for condition. Predicate can also accept an index argument, such as array position.
 * @returns {(value: T, index: number) => boolean} A predicate that returns a negation of the original predicate.
 */
function not(predicate) {
    return (value, index) => !predicate(value, index);
}
exports.not = not;
//# sourceMappingURL=index.js.map