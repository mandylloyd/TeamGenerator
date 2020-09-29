// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {        
        super(name, id, email)
        this.role = role;
        this.school = school; 
        console.log("Intern, " + this.name + " has been added.")
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}




module.exports = Intern;