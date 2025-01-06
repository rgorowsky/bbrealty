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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var aws_sdk_1 = require("aws-sdk");
var ses = new aws_sdk_1.default.SES({ region: "us-east-2" });
console.log("before handler"); // extra error handling - can remove later
var handler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Name, Email, Subject, Comment_1, params, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("beginning of handler"); // extra error handling - can remove later
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, 4, 5]);
                console.log(event); // extra error handling - can remove later
                _a = JSON.parse(event.body || "{}"), Name = _a.Name, Email = _a.Email, Subject = _a.Subject, Comment_1 = _a.Comment;
                console.log(event.body); // extra error handling - can remove later
                params = {
                    Source: "rgorowsky@gmail.com",
                    Destination: {
                        ToAddresses: ["rgorowsky@gmail.com"],
                    },
                    Message: {
                        Subject: { Data: Subject },
                        Body: { Text: { Data: Comment_1 } },
                    },
                    ConfigurationSetName: "contact-form-config-set",
                };
                console.log(params); // extra error handling - can remove later
                console.log("About to send an email with SES");
                return [4 /*yield*/, ses.sendEmail(params).promise()
                        .then(function (data) {
                        console.log("Email sent! Message ID:", data.MessageId);
                    })
                        .catch(function (error) {
                        console.error("Error sending email:", error);
                    })];
            case 2:
                _b.sent();
                console.log("Completed SES email send function");
                return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify({ message: "Email sent successfully!" }),
                    }];
            case 3:
                error_1 = _b.sent();
                console.error("Error sending email:", error_1);
                return [2 /*return*/, {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Failed to send email.",
                            error: error_1
                        }),
                    }];
            case 4:
                console.log("Handler finished lambda deploy");
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handler = handler;
