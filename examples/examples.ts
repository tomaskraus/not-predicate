import {not} from '../src/index';

const isEven = (n: number) => n % 2 === 0;

console.log([3, 2, 8, 5].filter(not(isEven)));
//=> [ 3, 5 ]

/*
// You cannot do this:
[3, 2, 8, 5].filter(!isEven);
//=> [ 3, 5 ]
*/

//However, you can use `not`, as it acts as a predicate:
[3, 2, 8, 5].filter(not(isEven)); //=> [ 3, 5 ]

const isElementIndexEven = (_: unknown, index: number) => index % 2 === 0;

console.log(['a', 'a', 'a', 'abc'].map(not(isElementIndexEven)));
//=> [ false, true, false, true ];
