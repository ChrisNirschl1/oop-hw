// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.roll = 'Intern';
    }
    getSchool(){
        return this.school;
    }
    //overwirtes generic employee
    getRole(){
        return 'Intern'
    }
}
module.exports = Intern;