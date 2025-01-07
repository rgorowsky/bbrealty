const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: "us-east-2" });

var handler = async function (event) {
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

        const command = new SendEmailCommand(params);
        const data = await ses.send(command);
        console.log("Email sent! Message ID:", data.MessageId);

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
                error: error,
            }),
        };
    }
};

exports.handler = handler;
