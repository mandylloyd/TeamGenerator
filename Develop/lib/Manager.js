// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNum) {
    super(name, id, email);
    this.role = role;
    this.officeNum = officeNum;
    console.log("Engineer, " + this.name + " has been added.")
  }
  getRole() {
    return "Manager";
}
  getOfficeNum() {
    return this.office;
  }
}



module.exports = Manager;
