const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    return completionCallback();
  }

  let readline = require ("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const input = () => {
    rl.question("Please enter a number to add to the sum: ", (answer) => {
      if ( !isNaN(parseInt(answer, 10)) ) { 
        sum = sum + answer;
        rl.close();
      } else {
        this.input();
      }
    })
  };
  
  input();

  return addNumbers(sum, numsLeft - 1, completionCallback);
}
