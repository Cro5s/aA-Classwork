const absurdBubbleSort = (arr, sortCompletionCb) => {
  let readline = require ("readline");
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let i = 0;

  const askIfGreaterThan = (el1, el2, callback) => {
    const ask = () => {
      reader.setPrompt(`Is ${el1} greater than ${el2}? Please answer yes or no. `);
      reader.prompt(true);

      reader.on("line", (answer) => {
        if ("yes" === answer) {
          callback(true, el1, el2);
          reader.removeListener("line");
          reader.emit("myEvent");
        } else if ("no" === answer) {
          callback(false, el1, el2)
          reader.removeListener("line");
          reader.emit("myEvent");
        } else {
          ask();
        }
      });
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
  
  // we're finished sorting
  reader.on("close", () => sortCompletionCb(arr));
  
  askIfGreaterThan(arr[i], arr[i+1], swapNums);
};

absurdBubbleSort([4,5,7,2,3,0,8,3,1,5,5], (arr) => console.log(`Thanks for sorting my array! ${arr}`));