const http = require("http");
const fs = require("fs");
const path = require("path");

const htmlPages = ["/", "/index.html"];
const publicDir = path.join(__dirname, "../public");

const myserver = http.createServer((req, res) => {
    // Log request timestamps
    if (htmlPages.includes(req.url)) {
        const timeStamp = `${new Date().toLocaleString()}: ${req.url} : received a request\n`;
        fs.appendFile("timeStampDetails.txt", timeStamp, (err) => {
            if (err) console.error("Error logging request:", err);
        });
    }

    // Serve files
    let filePath = path.join(publicDir, req.url === "/" ? "index.html" : req.url);
    const extname = path.extname(filePath);
    let contentType = "text/html";

    // Determine the content type based on file extension
    switch (extname) {
        case ".css":
            contentType = "text/css";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        case ".js":
            contentType = "application/javascript";
            break;
        // Add other file types as necessary
    }

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 - File Not Found</h1>");
            } else {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end(`<h1>500 - Server Error: ${err.code}</h1>`);
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

myserver.listen(5002, () => {
    console.log("Server running on port 5002");
});
