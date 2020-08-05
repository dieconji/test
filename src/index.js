const loadSecret = require('./load-secret');
const mysql = require('mysql');
let user;
let pass;

async function getParam()
{
  [user, pass] = await Promise.all([
    loadSecret('/app/dev/mysql_user'),
    loadSecret('/app/dev/mysql_pass')
  ]);

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

  });
}

getParam();

