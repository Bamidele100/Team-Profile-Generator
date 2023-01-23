const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

     getSchool() {
        return this.internSchool;
    }

    getRole() {
        return "Intern";
    }   
}

module.exports = Intern;