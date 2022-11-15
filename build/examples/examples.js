"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const isEven = (n) => n % 2 === 0;
console.log([3, 2, 8, 5].filter((0, index_1.not)(isEven)));
//=> [ 3, 5 ]
/*
// You cannot do this:
[3, 2, 8, 5].filter(!isEven);
//=> [ 3, 5 ]
*/
//However, you can use `not`, as it acts as a predicate:
[3, 2, 8, 5].filter((0, index_1.not)(isEven)); //=> [ 3, 5 ]
const isElementIndexEven = (_, index) => index % 2 === 0;
console.log(['a', 'a', 'a', 'abc'].map((0, index_1.not)(isElementIndexEven)));
//=> [ false, true, false, true ];
//# sourceMappingURL=examples.js.map