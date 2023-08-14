const md = require('../utils/generateMarkdown.js');

// Test generateMarkdown function by comparing the output of the function to a known string
test('generateMarkdown function should return formatted markdown', () => {
  const testData = {
    title: "Test Title",
    description: "Test Description",
    installation: "Test Installation",
    usage: "Test Usage",
    license: "MIT",
    contribution: "Test Contribution",
    test: "Test Test",
    email: "test@example.com",
    github: "test",
  };
  const testString = md.generateMarkdown(testData);
  const expectedStrig = "# Test Title\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n## Description\n\nTest Description\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n\n## Installation\n\nTest Installation\n\n## Usage\n\nTest Usage\n\n## License\n\n[MIT](https://opensource.org/licenses/MIT)\n\n## Contributing\n\nTest Contribution\n\n## Tests\n\nTest Test\n\n## Questions\n\nIf you have any questions, please contact me at [test@example.com](mailto:test@example.com).\n\nYou can also find me on [Github](https://github.com/test).\n\n";
  expect(testString).toBe(expectedStrig);
});

// Test renderLicenseBadge function by comparing the output of the function to a known string
test('renderLicenseBadge function should return a license badge', () => {
  const testData = "MIT";
  const testString = md.renderLicenseBadge(testData);
  const expectedStrig = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  expect(testString).toBe(expectedStrig);
});

// Test renderLicenseLink function by comparing the output of the function to a known string
test('renderLicenseLink function should return a license link', () => {
  const testData = "MIT";
  const testString = md.renderLicenseLink(testData);
  const expectedStrig = "[MIT](https://opensource.org/licenses/MIT)";
  expect(testString).toBe(expectedStrig);
});