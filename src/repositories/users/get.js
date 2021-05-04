const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async () => {
  const { dynamodb } = main.dependencies();

  return [];
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
