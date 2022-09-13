// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// classes needed for this application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// template needed for this application
const generateHTML = require('./src/template_helper');

// storage of each member of the team, used to be passed into the template
bucket = [];

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
    // switch statement to allow for continuation of the application if the user decides to add another employee, else write the index file
    const newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
    bucket.push(newManager);
    switch(manager.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        case 'Intern': 
        startIntern();
        break;
        default: writeToFile('./dist/index.html', generateHTML(bucket))
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
    // switch statement to allow for continuation of the application if the user decides to add another employee, else write the index file
    const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
    bucket.push(newEngineer);
    switch(engineer.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        case 'Intern': 
        startIntern();
        break;
        default: writeToFile('./dist/index.html', generateHTML(bucket))
    }
    })
}

// prompts for the intern
const startIntern = () => {
    inquirer.prompt([
    {
        type: 'input', 
        message: `What is the intern's name?`, 
        name: 'name',
    },
    {
        type: 'input', 
        message: `What is the intern's ID?`, 
        name: 'id',
    },
    {
        type: 'input', 
        message: `What is the intern's email?`, 
        name: 'email',
    },
    {
        type: 'input', 
        message: `What is the intern's school?`, 
        name: 'school',
    }, 
    {
        type: 'list', 
        message: `Which type of team member would you like to add next?`, 
        choices: ['Engineer', 'Intern', `I don't want to add any more members`],
        name: 'continue',
    }
])
.then((intern) => {
    // switch statement to allow for continuation of the application if the user decides to add another employee, else write the index file
    const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
    bucket.push(newIntern);
    // console.log(bucket);
    switch(intern.continue) {
        case 'Engineer': 
        startEngineer();
        break;
        case 'Intern': 
        startIntern();
        break;
        default: writeToFile('./dist/index.html', generateHTML(bucket))
    }
    })
}

// function to write the HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
       err ? console.error(err) : console.log('The Team Page has been created, it can be found in the dist directory')
     );}

// function call to initalize the application
startManager();