const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const main = async ({
  user_id,
  name
}) => {
  const dep = main.dependencies();

  const params = {
    TableName: process.env.DYNAMODB_TABLE_USERS,
    Key: {
      id: user_id
    },
    UpdateExpression: "set #name = :name",
    ExpressionAttributeValues: {
      ":name": name
    },
    ExpressionAttributeNames: {
      "#name": "name"
    }
  }

  await dep.dynamodb.update(params).promise()
}

main.dependencies = () => ({
  dynamodb
})

module.exports = main;
