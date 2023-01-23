
// generating team members
const generateTeam = function (team) {

    // HTML tags for the manager
    const generateManager = manager => {
        return `
<div class="employee" style="padding: 0px 20px 0px 20px;">
    <div class="card-header bg-primary text-white">
        <h2 class="title">${manager.getName()}</h2>
        <h3 class="title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="group">
            <li class="item">ID: ${manager.getId()}</li>
            <li class="item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // HTML tags for the engineers
    const generateEngineer = engineer => {
        return `
<div class="employee" style="padding: 0px 20px 0px 20px;">
    <div class="card-header bg-primary text-white">
        <h2 class="title">${engineer.getName()}</h2>
        <h3 class="title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="group">
            <li class="item">ID: ${engineer.getId()}</li>
            <li class="item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>

           
        </ul>
    </div>
</div>
        `;
    };

    // HTML tags for the interns
    const generateIntern = intern => {
        return `
<div class="employee" style="padding: 0px 20px 0px 20px;">
    <div class="card-header bg-primary text-white">
        <h2 class="title">${intern.getName()}</h2>
        <h3 class="title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="group">
            <li class="item">ID: ${intern.getId()}</li>
            <li class="item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="item">ID: ${intern.getSchool()}</li>
            
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team Members</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-3d-flex justify-content-center  style="padding: 0px 20px 0px 20px;">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
    `;
};