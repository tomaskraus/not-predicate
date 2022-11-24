import {not, TPredicate} from '../src/index';

const isEven: TPredicate<number> = (n: number) => n % 2 === 0;
const isPositionEven = (_: unknown, i: number) => i % 2 === 1;

const customThis = {
  myProp: 'hereIAm',
};

function isIndexEqualThreeAndThisObjectHasMyPropDefined(
  _: unknown,
  index: number
) {
  if (this) {
    return index === 3 && this['myProp'] === 'hereIAm';
  }
  return false;
}

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
  const nums = [1, 2, 2, 3];
  expect(nums.map(not(not(isEven)))).toEqual(nums.map(isEven));
});

test('deals with this', () => {
  // without explicit this
  expect(
    [2, 4, 3, 5, 0, 3, 3].filter(
      not(isIndexEqualThreeAndThisObjectHasMyPropDefined)
    )
  ).toEqual([2, 4, 3, 5, 0, 3, 3]);

  expect(
    [2, 4, 3, 5, 0, 3, 3].filter(
      not(isIndexEqualThreeAndThisObjectHasMyPropDefined),
      customThis
    )
  ).toEqual([2, 4, 3, 0, 3, 3]);
});
