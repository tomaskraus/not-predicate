const {not} = require('../build/src/index');

const isEven = n => n % 2 === 0;

console.log([1, 2, 8, 3].filter(not(isEven)));
//=> [ 1, 3 ]
