"use strict";
/**
 * Predicate negation. Suitable for RxJS, Array.filter and others.
 *
 * @public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
/**
 * Predicate that negates a result of its predicate argument.
 * @see {@link TPredicate}
 *
 * @template T The type of input value.
 * @param {(value: T, index: number) => boolean} predicate A predicate argument. A function to test a value for condition. Predicate can also accept an index argument, such as array position.
 * @returns {(value: T, index: number) => boolean} A predicate that negates a result of its predicate argument.
 */
function not(predicate) {
    return function (value, index) {
        return !predicate.call(this, value, index);
    };
}
exports.not = not;
//# sourceMappingURL=index.js.map