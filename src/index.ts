/**
 * Predicate negation. Suitable for RxJS, Array.filter and others.
 *
 * @public
 */

/**
 * A predicate type. Predicate is a function, that accepts some value and returns a boolean value, based on its condition.
 *
 * @template T The type of input value.
 * @param value A value provided for the condition. It is meant to be a value's order in some sequence, such as a value's index for the value in an array.
 * @param index A numerical value provided for the condition.
 *
 * @returns True, if value and/or index meet the predicate's condition.
 */
export type TPredicate<T> = (value: T, index: number) => boolean;

/**
 * Predicate that negates a result of its predicate argument.
 * @see {@link TPredicate}
 *
 * @template T The type of input value.
 * @param {(value: T, index: number) => boolean} predicate A predicate argument. A function to test a value for condition. Predicate can also accept an index argument, such as array position.
 * @returns {(value: T, index: number) => boolean} A predicate that negates a result of its predicate argument.
 */
export function not<T>(predicate: TPredicate<T>): TPredicate<T> {
  return function (this: any, value: T, index: number) {
    return !predicate.call(this, value, index);
  };
}
