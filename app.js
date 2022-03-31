const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
function landing() {

    inquirer
        .prompt([
            {
                message: "What would you like to do?",
                type: "list",
                name: "action",
                choices: [
                    "View Departments",
                    "View Roles",
                    "View Employees",
                    "Add New Department",
                    "Add New Role",
                    "Add New Employee",
                    "Update Employee Roles",
                    "Exit"
                ]
            }
        ])
        .then ((res) => {
            if (res.action === "View Departments") {
                viewDepartments();
            } else if (res.action === "View Roles") {
                viewRoles();
            } else if (res.action === "View Employees") {
                viewEmployees();
            } else if (res.action === "Add New Department") {
                addDepartment();
            } else if (res.action === "Add New Role") {
                addRole();
            } else if (res.action === "Add New Employee") {
                addEmployee();
            } else if (res.action === "Update Employee Roles") {
                updateEmployeeRoles();
            } else if (res.action === "Exit") {
                process.exit();
            }
  
        });
  
  };