const path = require('path');
const loadSecret = require('./load-secret');

module.exports = (async function() {
  let user;
  let password;

  // import .env variables
  require('dotenv').config({
    path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
  });

  if (process.env.NODE_ENV === 'local') {
    user = process.env.MYSQL_USER;
    password = process.env.MYSQL_PASS;
  }
  else {
    [user, password] = await Promise.all([
      loadSecret(`/app/${process.env.NODE_ENV}/mysql_user`),
      loadSecret(`/app/${process.env.NODE_ENV}/mysql_pass`)
    ]);
  }

  return { 
    mysqlConfig: {
      user,
      password,
    }
  }
})();
