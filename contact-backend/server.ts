import express from "express";
import bodyParser from "body-parser";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const app = express();
app.use(bodyParser.json());

const ses = new AWS.SES({ region: "us-east-2" });

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { Name, Email, Subject, Comment } = JSON.parse(event.body || "{}");

    const params = {
      Source: "betsybissonetterealty.com",
      Destination: {
        ToAddresses: ["rgorowsky@gmail.com"],
      },
      Message: {
        Subject: { Data: Subject },
        Body: { Text: { Data: Comment } },
      },
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email.",
        error,
      }),
    };
  }
};
