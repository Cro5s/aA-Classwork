const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    return completionCallback();
  }

  let readline = require ("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.pause();

  rl.question("Please enter a number to add to the sum:", function(answer) {
      if ( !isNaN(parseInt(answer, 10)) ) { 
        sum = sum + answer;
        rl.close();
      } else {
        this.input();
      }
  });

  rl.resume();
  

  addNumbers(sum, numsLeft - 1, completionCallback);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
