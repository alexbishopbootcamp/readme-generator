function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    // Default to no license
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    // Default to no license
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  let builder = "## License\n\n";
  builder += renderLicenseLink(license);
  builder += "\n\n";
  return builder;
}

function generateMarkdown(data) {
  let builder = "";
  builder += `# ${data.title}`
  builder += `\n\n${renderLicenseBadge(data.license)}\n\n`;
  builder += `## Description\n\n${data.description}\n\n`;
  builder += `## Table of Contents\n\n`;
  builder += `* [Installation](#installation)\n`;
  builder += `* [Usage](#usage)\n`;
  builder += data.license === "None" ? "" : `* [License](#license)\n`;
  builder += `* [Contributing](#contributing)\n`;
  builder += `* [Tests](#tests)\n`;
  builder += `* [Questions](#questions)\n\n`;
  builder += `## Installation\n\n${data.installation}\n\n`;
  builder += `## Usage\n\n${data.usage}\n\n`;
  builder += renderLicenseSection(data.license);
  builder += `## Contributing\n\n${data.contribution}\n\n`;
  builder += `## Tests\n\n${data.test}\n\n`;
  builder += `## Questions\n\n`;
  builder += `If you have any questions, please contact me at [${data.email}](mailto:${data.email}).\n\n`;
  builder += `You can also find me on [Github](https://github.com/${data.github}).\n\n`;
  return builder;
}

const md = {generateMarkdown: generateMarkdown}

module.exports = md;
