# Team Profile Generator

## Description

---

This is a Node.js command-line application developed for the purposes of generating an HTML page. Inquirer passes the command-line prompts to the user, which takes in information about any number of employees and whether they are an engineer or intern. It then summarizes each member's information and displays a roster of cards on the HTML page.

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Demonstration](#demonstration)
- [Tests](#tests)
- [Future Development](#future-development)
- [Authors](#authors)
- [Notes](#notes)

## Installation

---

    - Download or clone this repository,
    - Make sure to have Node.js installed,
    - Open up your integrated terminal and type "npm install" or "npm i" to install the required npm packages. (Inquirer and Jest)

## Usage

---

Application is inititalized by opening up the integrated terminal and then typing the following command

    node index.js

You will then be guided through a series of prompts about the manager first. Following these prompts, you will then have a selection of options to choose from:

    - Engineer,
    - Intern,
    - I don't want to add any more members

Picking engineer or intern will continue on with the command-line prompts used to generate more employee cards. The "I don't want to add any more members" option terminates the program, takes in all your responses and is used to create a index.html file within the dist directory. If you made a mistake during the process, feel free to fix the mistakes in the index.html file itself or to run the command again, as it would just overwrite the previous generated file.

Each employee will be asked for their name, employee ID and email. Depending on which type of employee is picked, different information will be asked...

    - Engineers will be asked for their GitHub,
    - Interns will be asked for their school

## Technology

---

Technology used to build the application:

    - Javascript
    - HTML
    - CSS
    - Node.js
    - Inquirer.js
    - Jest
    - Font Awesome

## Demonstration

---

![Demo](assets/One%20Piece%20Profile%20Generator.gif)

[Link to Demo](https://drive.google.com/file/d/1QHnm6O7ZQIajdGDyDuJao9M7U1JMw3Xm/view)

## Tests

---

As part this project's criteria, unit tests were created for the employee classes associated with the use of this application. They are found in the tests directory.

Test is inititalized by opening up the integrated terminal and then typing the following command

    npm test

## Future Development

---

Make the user interface more interactive:

    - somehow let the user move the cards around on the page to organize the team, or
    - create a tree with the manager at the top and the other employees branching off from one another

How to continue adding more employees or taking them away without starting the process.
To add validations to the command-line prompts to ensure appropriate inputs.

## Authors

---

- Tony Tran
  - [GitHub](https://github.com/tonytran97)

## Notes

---

As the command-line prompts do not currently have validations, make sure to check over your inputs and the HTML page itself for any errors. A CSS stylesheet has already been added inside of the dist directory. Feel free to change the styles in any way to match your preferances.
