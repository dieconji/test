const ssm = require('./aws-client');

const loadSecret = async (path) => {
  const secretName = `${path}`;

  const params = {
    Name: secretName,
    WithDecryption: true,
  };

  try {
    const request = await ssm.getParameter(params).promise();
    return request.Parameter.Value;
  } catch (e) {
    console.log(e);
  }
  
};

module.exports = loadSecret;
