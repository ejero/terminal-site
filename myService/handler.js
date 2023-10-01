const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();

module.exports.saveMessage = async (event) => {
  // Handle OPTIONS pre-flight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "CORS pre-flight successful!" }),
    };
  }

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
    // Save the message to DynamoDB
    await dynamoDB.put(params).promise();

    // Publish a message to an SNS topic
    const snsParams = {
      Message: JSON.stringify({
        name: requestBody.name,
        email: requestBody.email,
        message: requestBody.message,
      }),
      Subject: "New Message Received", // Set a subject for your notification
      TopicArn: "arn:aws:sns:us-east-1:353599428612:FormSubmissions",
    };

    await sns.publish(snsParams).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Message saved successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
