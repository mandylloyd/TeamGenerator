const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function selectRole() {
    inquirer.prompt([
        {
                type: "list", 
                name: "role", 
                message: "Which of the following roles is this employee in?",
                choices: ["Engineer", "Intern", "Manager",]
        }
    ])
        .then(async function (answer) {
            if (answer.type ==="Engineer") {
                await promptEngineer();
            } if (answer.type ==="Intern") {
                await promptIntern();
            } if (answer.type ==="Manager") {
                await promptManager();
            }
        })
}

const questions = [{
    type: "input", 
    name: "name", 
    message: "Please state the employee's name.",
    default: "No name provided."
}, 
{ 
    type: "input", 
    name: "id", 
    message: "Provide the employee's ID.",
    default: "ID unlisted."
}, 
{ 
    type: "input", 
    name: "email", 
    message: "Provide employee's email address.",
    default: "email@none"
}, ]

function promptEngineer() {
questions,
    {
        type: 'input',
        name: 'gitHub',
        message: "Enter the Engineer's gitHub username.",
        when: (answers) => answers.role ==="Engineer"
    }, 
    {
        type: "confirm", 
        name: "continue", 
        message: "Would you like to add another employee?"
    }
}

function promptIntern() {
 questions,
    {
        type: 'input',
        name: 'school',
        message: "What school does this intern attend?",
        when: (answers) => answers.role ==="Intern"
    }, 
    {
        type: "confirm", 
        name: "continue", 
        message: "Would you like to add another employee?"
    }
}

function promptManager() {
questions,
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this manager's office number?",
        when: (answers) => answers.role ==="Manager"
    }, 
    {
        type: "confirm", 
        name: "continue", 
        message: "Would you like to add another employee?"
    }
}

selectRole()


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
