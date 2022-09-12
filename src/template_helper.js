// importing classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

// importing the array built in the index
// let employeeArray = require('../index');
// import {bucket} from '../index';

// function which provides the frame to build the HTML page
function generateHTML(team) {
  // console.log(team);
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/89930d87fd.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <header>My Team</header>
        ${employeeBucket(team)}
      </body>
    </html>
    `
}

// function that generates the manager card
const generateManagerCard = manager => {
  // console.log(manager);
  const newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
    return `
    <div class="card" style="width: 18rem">
      <div class="card-body text-bg-primary">
<h5 class="card-title">${newManager.getName()}</h5>
        <p class="card-text"><i class="fa-solid fa-mug-hot"></i> ${newManager.getRole()}</p>
      </div>
      <div class="card ms-4" style="width: 12.5rem">
        <ul class="list-group list-group-flush card">
          <li class="list-group-item">ID: ${newManager.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.office}</li>
        </ul>
        </div>
    </div>
        `
}

// function that generates the engineer card
const generateEngineerCard = engineer => {
  const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
    return `
    <div class="card" style="width: 18rem">
    <div class="card-body text-bg-primary">
<h5 class="card-title">${newEngineer.getName()}</h5>
      <p class="card-text"><i class="fa-solid fa-mug-hot"></i> ${newEngineer.getRole()}</p>
    </div>
    <div class="card ms-4" style="width: 12.5rem">
      <ul class="list-group list-group-flush card">
        <li class="list-group-item">ID: ${newEngineer.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: ${newEngineer.getGitHub()}</li>
      </ul>
      </div>
  </div>
      `
}

// function built to loop through the length of an array and build cards based off that, avoids the overlapping on inputs from different members
const employeeBucket = (team) => {
  // console.log(team);
  let testRun = [];
  team.forEach(teamMember => {switch (teamMember.getRole()) {
    case 'Manager':
      // console.log(teamMember.getRole());
      const newManager = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.office);
      // console.log(newManager);
      testRun.push(generateManagerCard(newManager));
      break;
    case 'Engineer':
    const newEngineer = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github);
    generateEngineerCard(newEngineer);
    break;
  }
  });
  return testRun;
}
module.exports = generateHTML;