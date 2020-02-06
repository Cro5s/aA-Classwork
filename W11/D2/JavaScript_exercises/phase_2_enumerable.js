Array.prototype.myEach = function (myEachCb) {
  for (let i = 0; i < this.length; i++) {
    myEachCb(this[i]);
  };
};

/* a =[5, 21, 18]
a.myEach(cb)
5
undefined
21
undefined
18
undefined
undefined */

// def my_map (&prc)
//   self.each do |el|

//   end
// end

Array.prototype.myMap = function(myMapcb) {
  const newArray = [];
    function myEachCb (el){
      newArray.push(myMapcb(el))
    }
  this.myEach(myEachCb);
  return newArray;
};

function myMapcb(el) {
  return el * 2;
};
