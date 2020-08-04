const ssm = require('./aws-client');

const saveSecret = (username, password) => {
  console.log('Saving secret...'); 
  const secretName = `/${username}/password`;

  const params = { 
    Name: secretName, 
    Value: password, 
    Type: 'SecureString', 
    Overwrite: true
  }; 

  ssm.putParameter(params, (err, data) => { 
    if (err) { 
      console.log(err, err.stack); 
    } 
  });
};

module.exports = saveSecret;
