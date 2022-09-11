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
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <header>My Team</header>
        <h1> ${data.name} </h1>
      </body>
    </html>
    `
}

module.exports = generateHTML;