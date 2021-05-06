const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async ({
  user_id
}) => {
  const { dynamodb } = main.dependencies();

  const result = await dynamodb.get({
    TableName: process.env.DYNAMODB_TABLE_USERS,
    Key: {
      id: user_id
    }
  }).promise()

  return result.Item;
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
