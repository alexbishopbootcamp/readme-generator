// TODO: Include packages needed for this application
// Import inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const { resolve } = require('path');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  let shouldOverwrite;

  // Create "out" directory if it doesn't exist
  if (!fs.existsSync('./out')) {
    fs.mkdirSync('./out');
    shouldOverwrite = 'Y';
  } else {
    // Check if file exists
    if(fs.existsSync(`./out/${fileName}`)) {
      // Ask user if they want to overwrite file
      do {
        shouldOverwrite = await inquirer
          .prompt([{
              name: "overwrite",
              message: "File already exists. Overwrite? [Y/N]"
            }])
          .then((answers) => {
            return answers.overwrite;
          })
          .catch((error) => {
            if (error.isTtyError) {
              console.log("Prompt couldn't be rendered in the current environment");
            } else {
              console.log("Unknown error");
            }
          });
      } while (shouldOverwrite !== 'Y' && shouldOverwrite !== 'N')
    } else {
      shouldOverwrite = 'Y';
    }
  }

  if(shouldOverwrite === 'Y') {
    // write file to "out" directory
    fs.writeFile(`./out/${fileName}`, data, (err) =>
      err ? console.error(err) : console.log(`README written to out/${fileName}`)
    );
  } else {
    console.log("Aborting, nothing written.");
  }
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README.md", "Hello World!");
}

// Function call to initialize app
init();
