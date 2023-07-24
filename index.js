// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Table of Contents:',
        name: 'toc'
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause']
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Questions:',
        name: 'questions'
    },
];

let generateHTML = ({ title, description, toc, installation, usage, license, contributing, tests, questions }) => {
    return `# ${title}
    
    ## Description
    ${description}

    ## Table of Contents
    ${toc}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing 
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    ${questions}
  `
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('README.md', generateHTML(answers), (err) => {
            if (err) console.log(err);
        });
    });
}

// Function call to initialize app
init();