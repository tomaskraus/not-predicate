const {not} = require('../build/src/index');

const isEven = n => n % 2 === 0;

console.log([1, 2, 8, 3].filter(not(isEven)));
//=> [ 1, 3 ]

console.log('-----------');

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
