// start with shema then seed info do this with theme 

// reasorces for joins and inquirer
// make inquirer seperate functions and prompts

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: '',

  // Be sure to update with your own MySQL password!
  password: 'Ch1ck3n6_28',
  database: 'employee_DB',
});
