const loadSecret = require('./load-secret');
const mysql = require('mysql');

const user = loadSecret('/app/dev/mysql_user');
const pass = loadSecret('/app/dev/mysql_pass');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: pass,
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});



