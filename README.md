![build](https://github.com/tomaskraus/not-predicate/actions/workflows/node.js.yml/badge.svg)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

# not-predicate

Predicate negation. A predicate that negates a result of its predicate argument:

```ts
import {not} from 'not-predicate';

const isEven = (n: number) => n % 2 === 0;

console.log([1, 2, 8, 5].filter(not(isEven)));
//=> [ 1, 5 ]
```

## Why to use

You cannot simply use the `!` negation operator on functions, because you cannot cast a function type to boolean:

```ts
// You cannot do this:
[3, 2, 8, 5].filter(!isEven);
```

`not` acts as a predicate, so we can use it:

```ts
[3, 2, 8, 5].filter(not(isEven)); //=> [ 3, 5 ]
```

Plus, there are more `not-predicate`'s advantages:

- Works well with RxJS, Array.filter and others.
- Typed. With `d.ts` for Javascript.
- Zero-dependency.
- Well tested.

## Installation

```bash
$ npm install not-predicate
```

## Usage

Typescript / ES module:

```ts
import {not} from 'not-predicate';
```

Javascript / CommonJS:

```js
const {not} = require('not-predicate');
```

## More

Correctly negates a predicate that uses an index argument:

```ts
const isElementIndexEven = (_: unknown, index: number) => index % 2 === 0;

console.log(['a', 'a', 'a', 'abc'].map(not(isElementIndexEven)));
//=> [ false, true, false, true ];
```

Deals with `this` object properly:

```ts
const customWindow = {
  innerWidth: 640,
  innerHeight: 480,
};

function canXCoordFit(x) {
  return x > 0 && x <= this.innerWidth;
}

const xValues = [-10, 20, 680, 600, 800, 5];
const xsThatCanFit1 = xValues.filter(not(canXCoordFit), customWindow);
const xsThatCanFit2 = xValues.filter(not(canXCoordFit).bind(customWindow));
console.log(xsThatCanFit1, xsThatCanFit2);
//=> [ -10, 680, 800 ] [ -10, 680, 800 ]
```

A predicate type is also provided:

```ts
export type TPredicate<T> = (value: T, index: number) => boolean;
```

We can also use the `not-predicate` in [RxJS](https://rxjs.dev/):

```ts
import {not} from 'not-predicate';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';

const evenValueOnEvenIndex = (val: number, index: number) =>
  val % 2 === 0 && index % 2 === 0;

const src = from([1, 3, 5, 4, 6, 8]).pipe(filter(not(evenValueOnEvenIndex)));
const res: number[] = [];
src.subscribe(x => res.push(x));
console.log(res);
//=> [ 1, 3, 5, 4, 8 ]
```
