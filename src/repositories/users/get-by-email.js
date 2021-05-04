const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async ({
  email
}) => {
  const { dynamodb } = main.dependencies();

  const params = {
    TableName: process.env.DYNAMODB_TABLE_USERS,
    IndexName: 'email-index',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email
    },
    ProjectionExpression: 'id',
  }

  const result = await dynamodb.query(params).promise()
  if (result.Count === 0) {
    return undefined;
  }

  const [user] = result.Items;

  return user;
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
