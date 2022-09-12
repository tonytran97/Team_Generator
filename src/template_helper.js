// importing classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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

// function that generates the intern card
const generateInternCard = intern => {
  const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
    return `
    <div class="card" style="width: 18rem">
    <div class="card-body text-bg-primary">
<h5 class="card-title">${newIntern.getName()}</h5>
      <p class="card-text"><i class="fa-solid fa-mug-hot"></i> ${newIntern.getRole()}</p>
    </div>
    <div class="card ms-4" style="width: 12.5rem">
      <ul class="list-group list-group-flush card">
        <li class="list-group-item">ID: ${newIntern.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
        <li class="list-group-item">School: ${newIntern.getSchool()}</li>
      </ul>
      </div>
  </div>
      `
}

// function built to loop through the array that was passed through to generate new cards
const employeeBucket = (team) => {
  console.log(team);
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
    testRun.push(generateEngineerCard(newEngineer));
    break;
    case 'Intern':
    const newIntern = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school);
    testRun.push(generateInternCard(newIntern));
    break;
  }
  });
  return testRun;
}
module.exports = generateHTML;