"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const evenValueOnEvenIndex = (val, index) => val % 2 === 0 && index % 2 === 0;
const src = (0, rxjs_1.from)([1, 3, 5, 4, 6, 8]).pipe((0, operators_1.filter)((0, index_1.not)(evenValueOnEvenIndex)));
const res = [];
src.subscribe(x => res.push(x));
console.log(res);
//=> [ 1, 3, 5, 4, 8 ]
//# sourceMappingURL=rxjs-example.js.map