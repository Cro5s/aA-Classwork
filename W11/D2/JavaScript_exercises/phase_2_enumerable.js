Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    console.log( cb(this[i]) );
  };
};

function cb(el) {
  console.log(el);
};

// //function cb(el) {
// ...console.log(el);
// ... };
// undefined
//     > b =[5, 21, 18]
//     [5, 21, 18]
//         > b.myEach(cb)
// 5
// undefined
// 21
// undefined
// 18
// undefined
// undefined


Array.prototype.myMap = function(cb) {
    const resultsArray = [];
    this.myEach(cb)
};

