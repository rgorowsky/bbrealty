"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const ses = new aws_sdk_1.default.SES({ region: "us-east-2" });
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Name, Email, Subject, Comment } = JSON.parse(event.body || "{}");
        const params = {
            Source: "contact@betsybissonetterealty.com",
            Destination: {
                ToAddresses: ["rgorowsky@gmail.com"],
            },
            Message: {
                Subject: { Data: Subject },
                Body: { Text: { Data: Comment } },
            },
        };
        yield ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" }),
        };
    }
    catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to send email.",
                error,
            }),
        };
    }
});
exports.handler = handler;
