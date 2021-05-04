const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async ({
  name,
  email,
  password,
}) => {
  const { dynamodb } = main.dependencies();

  const now = new Date().toISOString()

  const id = uuidv4();

  await dynamodb.put({
    TableName: process.env.DYNAMODB_TABLE_USERS,
    Item: {
      id,
      email,
      password,
      name,
      created_at: now,
      updated_at: now
    }
  }).promise()

  return id;
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
