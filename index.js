const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./generateMarkdown')

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
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'none']
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
        message: 'GitHub Username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email'
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            if (err) console.log(err);
        });
    });
}

init();