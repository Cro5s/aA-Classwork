const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    return completionCallback.apply(this, [sum]);
  }
  let newSum = sum;
  let readline = require ("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please enter a number to add to the sum:", function(answer) {
      if ( !isNaN(parseInt(answer, 10)) ) { 
        newSum = newSum + answer;
        rl.close();
      } else {
        this.input();
      }
  });

  rl.on("close", () => {
    addNumbers(newSum, numsLeft - 1, completionCallback);
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
