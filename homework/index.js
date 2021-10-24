const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const makeHTML = require('./util/generateHtml');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

//empty array to push employye's into 
const employeeArr = [];
//manager is supposed to go first per read me
function newManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager Email?'
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Manager office number?'
        }
    ]).then(({name, id, email, officenumber})=>{
        employeeArr.push(new Manager(name, id, email, officenumber));
        buildEmployees();
    }
    )
}
newManager();

//Propmt to choose among the emloyees 
function buildEmployees() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'startpoint',
            message: 'Start building your team',
            choices: ['Add Engineer', 'Add Intern', 'Finish']
        }

    ]).then(answers => {
        //witch for multiple inputs scenarios 
        switch (answers.startpoint) {
            case 'Add Engineer':
                newEngineer();
                break;
            case 'Add Intern':
                newIntern();
                break;
            default:
              finish();
                break
        }
    })

}

function newEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Engineer Github?'
        }
    ]).then(({name, id, email, github})=>{
        employeeArr.push(new Engineer(name, id, email, github));
        buildEmployees();
    }
    )
}

function newIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern Email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern School?'
        }
    ]).then(({name, id, email, school})=>{
        employeeArr.push(new Intern(name, id, email, school));
        buildEmployees();
    }
    )
}

// finish = () =>{
//     fs.writeFile(outputPath, makeHTML(employeeArr), (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
// })}

finish = () =>{
    fs.writeFileSync(outputPath, makeHTML(employeeArr), "utf-8")}

