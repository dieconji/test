/*
const mysql = require('mysql');


console.log(mysqlConfig)

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

});
*/

(async () => {
  try {
    console.log('eo');
    const { mysqlConfig } = await require('./vars');

    console.log(mysqlConfig);
  } catch (e) {
    console.log(e);
  }
})();

/*
main()
    .then(text => {
        console.log('text');
    })
    .catch(err => {
        // Deal with the fact the chain failed
    });
    */