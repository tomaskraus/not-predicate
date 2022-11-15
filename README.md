[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

# not-predicate

Predicate negation. A predicate that returns a negation of the original predicate:

```ts
import {not} from 'not-predicate';

const isEven = (n: number) => n % 2 === 0;

console.log([1, 2, 8, 5].filter(not(isEven)));
//=> [ 1, 5 ]
```

## Why to use

- Typed. With `d.ts` for Javascript.
- Suitable for RxJS, IxJS, Array.filter and others.
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

Also correctly negates a predicate that uses an index argument:

```ts
const isPositionEven = (_: unknown, i: number) => i % 2 === 1;

console.log(['a', 'a', 'a', 'abc'].map(not(isPositionEven)));
//=> [true, false, true, false];
```
