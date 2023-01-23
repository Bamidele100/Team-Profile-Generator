const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const createSite = require("./src/create-site.js");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team members.html");
const teamMembers = [];

function plusTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "employeeName",
      message: "Please select to build your team members:",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I do not want to create another team"
      ]
    },
  ])
  .then (function (data) {
    console.log(data);
    const employee = data.employeeName;
    if (employee === "Manager") {
      manager();
    }
    else if (employee === "Engineer") {
      engineer();
    }
    else if (employee === "Intern") {
      intern();
    }
    else if (employee ===  "I do not want to create another team")
    finish();
  })
}
function manager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name:?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's ID:?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's Email Address:?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number:?",
    }
  ])
  .then(function (data) {
        console.log(data);
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail,data.managerOfficeNumber);
        teamMembers.push(manager);
        plusTeam()
      })
}
  
function engineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name:?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID:?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's Email Address:?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's Github username:?",
    }
  ])
  .then(function (data) {
        console.log(data);
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail,data.engineerGithub);
        teamMembers.push(engineer);
        plusTeam()
      });
}

function intern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name:?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID:?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's Email Address:?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Which school does the intern attend:?",
    }
  ])
  .then(function (data) {
        console.log(data);
        const intern = new Intern(data.internName,  data.internId, data.internEmail, data.internSchool);
        teamMembers.push(intern);
        plusTeam()
      });
}

function finish() {
   console.log("Team members were successfully created!")
  
  fs.writeFileSync(outputPath, createSite(teamMembers), "UTF-8")
  
}
  plusTeam()