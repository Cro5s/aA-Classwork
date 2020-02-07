const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    return completionCallback()
;  }
  let readline = require ("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please enter a number to add to the sum: ", (answer) => {
    if ( !isNaN(answer) ) {
      sum = sum + answer;
    };

    rl.close();
  });

  return addNumbers(sum, numsLeft - 1, completionCallback);
}
