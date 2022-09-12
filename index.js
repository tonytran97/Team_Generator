// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

// template needed for this application
const generateHTML = require('./src/template_helper');

// storage of each member of the team, used to loop through the array to generate multiple cards in the template
bucket = [];
// const fullBucket = bucket;

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
            name: 'id',
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
    const newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
    bucket.push(newManager);
    // console.log(bucket);
    // console.log(manager);
    switch(manager.continue) {
        // const newManager = new Manager(manager.name, manager.ID, manager.email, manager.office);
        case 'Engineer': 
        startEngineer();
        break;
        default: writeToFile('./index2.html', generateHTML(bucket))
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
        name: 'id',
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
    const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
    bucket.push(newEngineer);
    console.log(bucket);
    switch(engineer.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        default: writeToFile('./index2.html', generateHTML(this.bucket))
    }
    })
}

// function to write the HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
       err ? console.error(err) : console.log('HTML file has been created')
     );}

// exporting the bucket array to the template
// module.exports = {bucket};

// function call to initalize the application
startManager();