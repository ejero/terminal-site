const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.saveMessage = async (event) => {
  const requestBody = JSON.parse(event.body);

  const params = {
    TableName: "Messages",
    Item: {
      id: Date.now().toString(),
      name: requestBody.name,
      email: requestBody.email,
      message: requestBody.message,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message saved successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
