const http = require("http");
const fs = require("fs");
const path = require("path");


const htmlPages = [
    "/demo1(login).html",
    "/demo1(home).html",
    "/demo1(contactus).html",
    "/demo1(donate).html",
    "/demo1(about).html",
];

const myserver = http.createServer((req, res) => {
    
    if (htmlPages.includes(req.url) || req.url === "/") {
        const timeStamp = `${new Date().toLocaleString()}: ${req.url} : received a request\n`;
        fs.appendFile("timeStampDetails.txt", timeStamp, (err) => {
            if (err) console.error("Error logging request:", err);
        });
    }

    
    let filePath = path.join(__dirname, req.url === "/" ? "demo1(login).html" : req.url);
    const extname = path.extname(filePath);
    let contentType = "text/html";

    
    if (extname === ".css") contentType = "text/css";
    if (extname === ".png") contentType = "image/png";
    if (extname === ".jpg") contentType = "image/jpg";

    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - File Not Found</h1>");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

myserver.listen(5002, () => {
    console.log("Server running on port 5002");
});
