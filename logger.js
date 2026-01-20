const fs = require("fs");

function logActivity(message) {
    const timestamp = new Date().toString();
    const logMessage = `[${timestamp}] - ${message}\n`;

    fs.appendFile("activity.log", logMessage, (err) => {
        if (err) {
            console.log("Failed to write");
        }
    });
}

module.exports = { logActivity };
