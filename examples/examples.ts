import {not} from '../src/index';

const isEven = (n: number) => n % 2 === 0;

console.log([1, 2, 8, 5].filter(not(isEven)));
//=> [ 1, 5 ]

const isElementPositionEven = (_: unknown, index: number) => index % 2 === 1;

/*
// You cannot do this:
['a', 'abc'].map(!isElementPositionEven);
*/

console.log(['a', 'a', 'a', 'abc'].map(not(isElementPositionEven)));
//=> [true, false, true, false];
