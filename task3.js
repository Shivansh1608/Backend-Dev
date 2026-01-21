const fs = require("fs");

fs.copyFileSync("source.txt", "destination.txt");

fs.copyFile("source.txt", "destination_async.txt", (err) => {
    if (err) {
        console.log("File copy failed:", err);
    } else {
        console.log("File copied successfully to async file");
    }
});

fs.unlink("destination_async.txt", (err) => {
    if (err) {
        console.log("File deletion failed:", err);
    } else {
        console.log("File deleted successfully");
    }
});

fs.unlinkSync("dest.txt");
