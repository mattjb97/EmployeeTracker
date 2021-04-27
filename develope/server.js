// start with shema then seed info do this with theme 

// reasorces for joins and inquirer
// make inquirer seperate functions and prompts

const mysql = require('mysql');
const inq = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port, if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Ch1ck3n6_28',
    database: 'employee_DB',
});

function askQuestion() {
    inq.prompt([
        {
            name: 'userchoice',
            message: 'what would you like to do next',
            type: 'list',
            choices: [
                'view departments',
                'view roles',
                'view employees',
                'add departments',
                'add roles',
                'add employees',
                'update department',
                'update roles',
                'update employees'
            ]
        }
    ]).then(answers => {
        if (answers.userchoice === 'view departments') {
            viewDepartments()
        } else if (answers.userchoice === 'view roles') {
            viewRoles()
        } else if (answers.userchoice === 'view employees') {
            viewEmployees()
        } else if (answers.userchoice === 'add department') {
            addDepartment()
        } else if (answers.userchoice === 'add roles') {
            addRole()
        } else if (answers.userchoice === 'add employees') {
            addEmployee()
        } else if (answers.userchoice === 'update department') {
            updateDepartment()
        } else if (answers.userchoice === 'update roles') {
            updateRole()
        } else if (answers.userchoice === 'update employees') {
            updateEmployee()
        }
    })
};

const viewDepartments = () => {
    console.log('Selecting all deparments...\n');
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        askQuestion();
    });
};

const viewRoles = () => {
    console.log('Selecting all roles...\n');
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        askQuestion();
    });
};

const viewEmployees = () => {
    console.log('Selecting all employees...\n');
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        askQuestion();
    });
};


const addDepartment = () => {
    console.log('Adding new department...\n');
    const query = connection.query(
        'INSERT INTO department SET ?',
        {
            department_name: ''
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} department inserted!\n`);
            // Call updatesong AFTER the INSERT completes
            updatesong();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};

const addRole = () => {
    console.log('Adding new roles...\n')
    const query = connection.query(
        'INSERT INTO roles SET ?',
        {
            department_name: ''
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} role inserted!\n`);
            // Call updatesong AFTER the INSERT completes
            updatesong();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};


const addEmployee = () => {
    console.log('Adding new employee ...\n')
    const query = connection.query(
        'INSERT INTO employee SET ?',
        {
            department_name: ''
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee inserted!\n`);
            // Call updatesong AFTER the INSERT completes
            updatesong();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};



const updateDepartment = () => {
    console.log('updating department...\n')
}

const updateRole = () => {
    console.log('updating department...\n')
}

const updateEmployee = () => {
    console.log('updating department...\n')
}



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    askQuestion();
});
