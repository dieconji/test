const mysql = require('mysql');

(async () => {
  try {
    const { mysqlConfig } = await require('./vars');

    const con = mysql.createConnection({
      host: 'localhost',
      user: mysqlConfig.user,
      password: mysqlConfig.password,
    });
    
    con.connect((err) => {
      if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });
    
    con.end((err) => {
      console.log(err);
    });
  } catch (e) {
    console.log(e);
  }
})();
