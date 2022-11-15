"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const isEven = (n) => n % 2 === 0;
console.log([1, 2, 8, 5].filter((0, index_1.not)(isEven)));
//=> [ 1, 5 ]
const isPositionEven = (_, index) => index % 2 === 1;
console.log(['a', 'a', 'a', 'abc'].map((0, index_1.not)(isPositionEven)));
//=> [true, false, true, false];
//# sourceMappingURL=examples.js.map