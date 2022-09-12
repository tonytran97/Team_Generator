const Employee = require('./Employee');

// class extension from employee with new parameter and following methods
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email);
        this.office = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;