const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-3'});
const ssm = new AWS.SSM();

module.exports = ssm;
