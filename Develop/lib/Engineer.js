// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email);
        this.role = role;
        this.github = github;
        console.log("Engineer, " + this.name + " has been added.")
    }
    thisRole() {
        return "Engineer"
    }
    engineersGithub() {
        return this.github
    }
}



module.exports = Engineer;