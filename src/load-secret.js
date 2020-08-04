const ssm = require('./aws-client');

const loadSecret = (path) => {
  console.log('Loading secret...'); 
  const secretName = `${path}`;

  const params = { 
    Name: secretName, 
    WithDecryption: true,
  }; 

  ssm.getParameter(params, (err, data) => { 
    if (err) { 
      console.log(err, err.stack); 
    } 
    else {
      console.log(data);
    }
  });
};

module.exports = loadSecret;
