const Employee = require('./Employee');

// class extension from employee with new parameter and following methods
class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;