// Imports
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

// Our questions for inquirer
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a title for your project.";
      }
    }
  },
  {
    name: "description",
    message: "Please enter a description for your project.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a description for your project.";
      }
    }
  },
  {
    name: "installation",
    message: "Please enter installation instructions for your project.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter installation instructions for your project.";
      }
    }
  },
  {
    name: "usage",
    message: "Please enter usage instructions for your project.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter usage instructions for your project.";
      }
    }
  },
  {
    name: "contribution",
    message: "Please enter contribution guidelines for your project.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter contribution guidelines for your project.";
      }
    }
  },
  {
    name: "test",
    message: "Please enter test instructions for your project.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter test instructions for your project.";
      }
    }
  },
  {
    name: "license",
    message: "Please select a license for your project.",
    type: "list",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "BSD 3",
      "None"
    ]
  },
  {
    name: "github",
    message: "Please enter your GitHub username.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter your GitHub username.";
      }
    }
  },
  {
    name: "email",
    message: "Please enter your email address.",
    type: "input",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter your email address.";
      }
    }
  }
];

// Question to ask if file already exists
const overwriteQuestion = [
  {
    name: "overwrite",
    message: "out/README.MD already exists. Overwrite?",
    type: "list",
    choices: [
      "No",
      "Yes"
    ]
  },
]


async function writeToFile(fileName, data) {
  let shouldOverwrite;

  // Create "out" directory if it doesn't exist
  if (!fs.existsSync('./out')) {
    fs.mkdirSync('./out');
    shouldOverwrite = 'Yes';
  } else {
    // Check if file exists
    if(fs.existsSync(`./out/${fileName}`)) {
      // Ask user if they want to overwrite file
      shouldOverwrite = await inquirer
        .prompt(overwriteQuestion)
        .then((answers) => {
          return answers.overwrite;
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
          } else {
            console.log("Unknown error when prompting for input");
          }
          shouldOverwrite = 'No';
        });
    } else {
      shouldOverwrite = 'Yes';
    }
  }

  if(shouldOverwrite === 'Yes') {
    // write file to "out" directory
    fs.writeFile(`./out/${fileName}`, data, (err) =>
      err ? console.error(err) : console.log(`README written to out/${fileName}`)
    );
  } else {
    console.log("Aborting, nothing written.");
  }
}

async function init() {
  // Query user for data
  const answers = await inquirer.prompt(questions);
  // Generate markdown
  const markdown = md.generateMarkdown(answers);
  // Write markdown to file
  await writeToFile("README.md", markdown);
}

init();
