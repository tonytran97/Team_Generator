// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// template needs for this application
const generateHTML = require('./src/template_helper');

// array of questions to be run through for the manager on initation of the application
const startManager = [
    {
        type: 'confirm', 
        message: `Welcome to the Team Generator, let's begin!`, 
        name: 'start',
    },
    {
        type: 'input', 
        message: `What is the team manager's name?`, 
        name: 'name'
    }
]
// function to write the HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
       err ? console.error(err) : console.log('HTML file has been created')
     );}

// function to initalize the application
function init() {
    inquirer
    .prompt(startManager)
    .then((response) => 
    // test in production, will redirect to dist when application is fully complete
    writeToFile('./index2.html', generateHTML(response)))
}

// function call to initalize the application
init();