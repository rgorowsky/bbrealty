import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-2" });
console.log("before handler"); // extra error handling - can remove later

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    console.log("beginning of handler"); // extra error handling - can remove later
  try {
    console.log(event); // extra error handling - can remove later
    const { Name, Email, Subject, Comment } = JSON.parse(event.body || "{}");
    console.log(event.body); // extra error handling - can remove later
    const params = {
      Source: "rgorowsky@gmail.com",
      Destination: {
        ToAddresses: ["rgorowsky@gmail.com"],
      },
      Message: {
        Subject: { Data: Subject },
        Body: { Text: { Data: Comment } },
      },
      ConfigurationSetName: "contact-form-config-set",
    };
    console.log(params); // extra error handling - can remove later

    console.log("About to send an email with SES");
    await ses.sendEmail(params).promise()
      .then((data) => {
        console.log("Email sent! Message ID:", data.MessageId);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    console.log("Completed SES email send function");

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
        error
      }),
    };
  } finally {
    console.log("Handler finished lambda deploy");
  }
};
