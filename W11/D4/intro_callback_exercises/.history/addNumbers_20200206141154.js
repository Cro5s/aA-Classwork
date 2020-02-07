const addNumbers = (sum, numsLeft, completionCallback) => {
  let readline = require ("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please enter a number to add to the sum: ", (answer) => {
    if (!isNaN(answer)) {

    } else {
       sum = sum + answer;
    };
  });
}
