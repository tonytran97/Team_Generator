// importing classes
const Manager = require('../lib/Manager');

// function which provides the frame to build the HTML page
function generateHTML(data) {
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
        <div class="card" style="width: 18rem">
      <div class="card-body text-bg-primary">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</p>
      </div>
      <div class="card ms-4" style="width: 12.5rem">
        <ul class="list-group list-group-flush card">
          <li class="list-group-item">ID: ${data.ID}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li class="list-group-item">Office number: ${data.office}</li>
        </ul>
      </div>
    </div>
      </body>
    </html>
    `
}

module.exports = generateHTML;