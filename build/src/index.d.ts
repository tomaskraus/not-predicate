/**
 *
 */
export declare type PredicateType<T> = (value: T, index: number) => boolean;
/**
 * @template T The type of input value.
 * @param {(value: T, index: number) => boolean} predicate Original predicate. A function to test a value for condition. Predicate can also accept an index argument, such as array position.
 * @returns {(value: T, index: number) => boolean} A predicate that returns a negation of the original predicate.
 */
export declare function not<T>(predicate: PredicateType<T>): PredicateType<T>;
