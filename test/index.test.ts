import {not, PredicateType} from '../src/index';

const isEven: PredicateType<number> = (n: number) => n % 2 === 0;
const isPositionEven = (_: unknown, i: number) => i % 2 === 1;

test('Negates the predicate.', () => {
  expect([1, 2, 2, 3].map(not(isEven))).toEqual([true, false, false, true]);
});

test('Negates the predicate that uses index argument.', () => {
  expect([1, 2, 2, 3].map(not(isPositionEven))).toEqual([
    true,
    false,
    true,
    false,
  ]);
});

test('Double negation cancels itself.', () => {
  expect([1, 2, 2, 3].map(not(not(isEven)))).toEqual([
    false,
    true,
    true,
    false,
  ]);
});
