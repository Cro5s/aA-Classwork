
// let curriedSumTwo = curriedSum.bind(this, 2)

function curriedSum(numberOne) {
  const count = numberOne;
  let numbers = [];
  
  return function (numberTwo) {
    numbers.push(numberTwo);
    
    if (numbers.length === count) {
      const reducer = (accumulator, current) => accumulator + current;
      console.log(numbers.reduce(reducer)); 
    };
  };
}

let _curriedSum = curriedSum(3); // 6  
_curriedSum(1); // Function
_curriedSum(2); // Function  
_curriedSum(3); // 6  

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));

// const curriedSum = function(x) {
//   return function(y) {
//     console.log(x+ y);
//   };
// }