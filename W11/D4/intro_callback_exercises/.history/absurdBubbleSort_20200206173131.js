const absurdBubbleSort = (arr, sortCompletionCb) => {
  let readline = require ("readline");
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let i = 0;

  const askIfGreaterThan = (el1, el2, callback) => {
    const ask = () => {
      reader.question(`Is ${el1} greater than ${el2}? Please answer yes or no. `, (answer) => {
        if ("yes" === answer) {
          callback(true, el1, el2);
        } else if ("no" === answer) {
          callback(false, el1, el2)
        } else {
          ask();
        }
      });
    };

    ask();
  };

  const swapNums = (bool, el1, el2) => {
    if (bool === true) {
      [el1, el2] = [el2, el1]
      this.swapped = true;
    } else {
      this.swapped = false;
    }
  };
  
  reader.on("line", () => {
    if (i < arr.length - 1) {  
      askIfGreaterThan(arr[i], arr[i+1], swapNums);
      i++;
    } else {
      reader.close();
    };
  });
  
  // we're finished sorting
  reader.on("close", () => sortCompletionCb(arr));
  
  askIfGreaterThan(arr[i], arr[i+1], swapNums);
};

absurdBubbleSort([4,5,7,2,3,0,8,3,1,5,5], (arr) => console.log(`Thanks for sorting my array! ${arr}`));