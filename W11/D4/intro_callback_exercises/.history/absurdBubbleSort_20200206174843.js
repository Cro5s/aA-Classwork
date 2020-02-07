const absurdBubbleSort = (arr, sortCompletionCb) => {
  let readline = require ("readline");
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let i = 0;

  const askIfGreaterThan = (el1, el2, callback) => {
    let that = this;
    
    const ask = () => {
      reader.setPrompt(`Is ${el1} greater than ${el2}? Please answer yes or no. `);
      reader.prompt(true);
      that.callback = callback;
    };

    ask();
  };

  const swapNums = (bool, el1, el2) => {
    if (bool === true) {
      [el1, el2] = [el2, el1];
    };
  };
  
  reader.on("myEvent", () => {
    if (i < arr.length - 1) {  
      askIfGreaterThan(arr[i], arr[i+1], swapNums);
      i++;
    } else {
      reader.close();
    };
  });

  reader.on("line", (answer) => {
    if ("yes" === answer) {
      this.callback(true, el1, el2);
      reader.emit("myEvent");
    } else if ("no" === answer) {
      this.callback(false, el1, el2)
      reader.emit("myEvent");
    } else {
      ask();
    }
  });
  
  // we're finished sorting
  reader.on("close", () => sortCompletionCb(arr));
  
  askIfGreaterThan(arr[i], arr[i+1], swapNums);
};

absurdBubbleSort([4,5,7,2,3,0,8,3,1,5,5], (arr) => console.log(`Thanks for sorting my array! ${arr}`));