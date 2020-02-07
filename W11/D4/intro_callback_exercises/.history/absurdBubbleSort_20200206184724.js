const absurdBubbleSort = (arr, sortCompletionCb) => {
  let readline = require ("readline");
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let i = 0;
  this.swapped = false;

  const askIfGreaterThan = (el1, el2, callback) => {
    reader.setPrompt(`${arr} Is ${arr[el1]} greater than ${arr[el2]}? Please answer yes or no. `);
    this.callback = callback;
    this.el1 = el1;
    this.el2 = el2;
    reader.prompt(true);
  };
  
  const swapNums = (bool, el1, el2) => {
    if (bool === true) {
      [arr[el1], arr[el2]] = [arr[el2], arr[el1]];
    };
  };

  const iterate = () => {
    if (i < arr.length - 2) {  
      i++;
      askIfGreaterThan(i, i+1, swapNums);
    };
  };

  const resetI = () => {
    i = -1;
    this.swapped = false;
    iterate();
  }

  reader.on("notSwapped", () => {
    if (i === arr.length - 2) {
      if (this.swapped) {
        resetI();
      } else {
        reader.close();
      }
    }
  });

  reader.on("swapped", () => {
    this.swapped = true;
    if (i === arr.length - 2) {
      resetI();
    }
  });

  reader.on("line", (answer) => {
    if ("yes" === answer) {
      this.callback(true, this.el1, this.el2);
      reader.emit("swapped");
      iterate();
    } else if ("no" === answer) {
      this.callback(false, this.el1, this.el2)
      reader.emit("notSwapped");
      iterate();
    } else {
      askIfGreaterThan(this.el1, this.el2, this.callback);
    }
  });
  
  // we're finished sorting
  reader.on("close", () => sortCompletionCb(arr));
  
  askIfGreaterThan(i, i+1, swapNums);
};

absurdBubbleSort([3,2,1], (arr) => console.log(`Thanks for sorting my array! ${arr}`));