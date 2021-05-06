const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async ({
  user_id
}) => {
  const dep = main.dependencies();

  await dep.dynamodb.delete({
    TableName: process.env.DYNAMODB_TABLE_USERS,
    Key: {
      id: user_id
    }
  }).promise()
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
