// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// template needed for this application
const generateHTML = require('./src/template_helper');

// array of prompts to be run through for the manager on initation of the application
const startManager = () => {
    inquirer.prompt([
        {
            type: 'confirm', 
            message: `Welcome to the Team Generator, let's begin!`, 
            name: 'start',
        },
        {
            type: 'input', 
            message: `What is the team manager's name?`, 
            name: 'name',
        },
        {
            type: 'input', 
            message: `What is the team manager's ID?`, 
            name: 'ID',
        },
        {
            type: 'input', 
            message: `What is the team manager's email?`, 
            name: 'email',
        },
        {
            type: 'input', 
            message: `What is the team manager's office number?`, 
            name: 'office',
        }, 
        {
            type: 'list', 
            message: `Which type of team member would you like to add next?`, 
            choices: ['Engineer', 'Intern', `I don't want to add any more members`],
            name: 'continue',
        }
])
.then((manager) => {
    // switch statement to allow for continuation of the application if Engineer is selected, else write the index file
    switch(manager.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        default: writeToFile('./index2.html', generateHTML(manager))
    }
    })
}

// prompts for the engineer
const startEngineer = () => {
    inquirer.prompt([
    {
        type: 'input', 
        message: `What is the engineer's name?`, 
        name: 'name',
    },
    {
        type: 'input', 
        message: `What is the engineer's ID?`, 
        name: 'ID',
    },
    {
        type: 'input', 
        message: `What is the engineer's email?`, 
        name: 'email',
    },
    {
        type: 'input', 
        message: `What is the engineer's GitHub username?`, 
        name: 'github',
    }, 
    {
        type: 'list', 
        message: `Which type of team member would you like to add next?`, 
        choices: ['Engineer', 'Intern', `I don't want to add any more members`],
        name: 'continue',
    }
])
.then((engineer) => {
    // switch statement to allow for continuation of the application if Engineer is selected, else write the index file
    switch(engineer.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        default: writeToFile('./index2.html', generateHTML(engineer))
    }
    })
}

// function to write the HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
       err ? console.error(err) : console.log('HTML file has been created')
     );}

// function call to initalize the application
startManager();