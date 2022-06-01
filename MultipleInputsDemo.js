const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}

async function main() {
  // this while loop will work with the input and
  //ask the user till he/she writes exit
  while (true) {
    // you can use as many of these as you want
    const name = await question(
      "Say Something? or exit to close the program \n"
    );
    if (name == "exit") {
      break; // or process.exit(1)
    }
    //your code goes here
    console.log("you said " + name + "\n");
  }
  readline.close();
}

main();
